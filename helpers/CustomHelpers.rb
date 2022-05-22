require 'set'

module CustomHelpers
  end
  def youtube_video(video_id)
    res = ""
    if video_id
      res <<
      %{
<div class="d-flex justify-content-center readable">
    <div class="col-12">
      <div class="d-flex align-items-center justify-content-center">
        <div class="ratio ratio-16x9">
          <iframe src="https://www.youtube-nocookie.com/embed/#{video_id}?rel=0&amp;showinfo=0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
</div>
      }
    end
    return res
  end

  def get_article_id(article)
    path = article.source_file
    ext = article.ext
    res = path.match(/\/([^\/]+)#{ext}/)
    return res.captures[0]
  end

  def get_articles_shortlist(max_count=nil, blog_type=nil, exclude_self=true)
    ls = sitemap.resources.select { |r| r.is_a?(Middleman::Blog::BlogArticle) }
    unless blog_type.nil?
      ls = ls.select { |b| b.path.start_with?(blog_type) }
    end
    if exclude_self
      ls = ls.select { |b| get_article_id(current_page) != get_article_id(b) }
    end
    ls = ls.select { |b| not b.tags.include?("ramble") }
    ls = ls.sort { |a, b| a.date <=> b.date }.reverse
    max_count = max_count.nil? ? ls.size : max_count
    return [ls.take(max_count), [ls.size - max_count, 0].max]
  end

  def has_video?(article)
    return !article.data.youtube_video_id.nil?
  end

  def has_audio?(article)
    id = get_article_id(article)
    supported_extensions = ["mp3", "wav"]
    supported_extensions.each() do | ext |
      audio_path = "source/#{article.data.blog}/#{id}/audio.#{ext}"
      if File.file?(audio_path)
        return "./audio.#{ext}"
      end
    end
    return nil
  end

  def prettify_cocktail_text(page, text)
    ls = cocktail_legend_items(page)
    ls.each do | term, definition |
      if text.downcase.include?(term.downcase)
        # HACK I don't know what kind of capitalization I'll be using initially
        #   so let's just try a bunch of different things
        text.gsub!(term, "<em>" + term + "</em>")
        text.gsub!(term.downcase, "<em>" + term + "</em>")
        text.gsub!(term.capitalize, "<em>" + term + "</em>")
        text.gsub!(split_and_capitalize(term), "<em>" + term + "</em>")
      end
    end
    text = prettify_food_text(text)
    return text
  end

  def prettify_food_text(text)
    if text.nil? or text.empty?
      return ""
    end
    from_value_to_replacement = [
      ["0/3", "↉"],
      ["1/10", "⅒ "],
      ["1/9", "⅑"],
      ["1/8", "⅛"],
      ["1/7", "⅐"],
      ["1/6", "⅙"],
      ["1/5", "⅕"],
      ["1/4", "¼"],
      ["1/3", "⅓"],
      ["1/2", "½"],
      ["2/5", "⅖"],
      ["2/3", "⅔"],
      ["3/8", "⅜"],
      ["3/5", "⅗"],
      ["3/4", "¾"],
      ["4/5", "⅘"],
      ["5/8", "⅝"],
      ["5/6", "⅚"],
      ["7/8", "⅞"],
      [/(\d+)F/, '\1°F'],
      [/(\d+)C/, '\1°C']
    ]
    pretty_text = text
    from_value_to_replacement.each do |t|
      pretty_text.gsub!(t[0], t[1])
    end
    return pretty_text
  end

  def portfolio(title = nil)
    portfolio_path = "/img/portfolio"
    glob = Dir.glob("source#{portfolio_path}/*.jpg")
    res = ""
    unless title.blank?
      res << page_title(title, true)
    end
    res <<
    %{
<table class="mx-auto">
  <tbody>
    }
    glob.sort.reverse.each do |photo_path|
      full_photo_path = "#{portfolio_path}/#{File.basename(photo_path)}"
      res <<
      %{
    <tr>
      <td class="photo-td">
        <a href="#{full_photo_path}">
          <img class="photo" src="#{full_photo_path}">
          </img>
        </a>
      </td>
    </tr>
      }
    end
    res <<
    %{
  </tbody>
</table>
    }
    return res
  end

  def articles_table(articles, is_main_page, title = nil)
    res = ""
    unless title.blank?
      res << page_title(title, is_main_page, articles)
    end
    res <<
    %{
<table class="table mx-auto">
  <tbody>
    }
    ls = []
    rambles_ls = []
    is_previous_ramble = false
    if current_page.path.include?("blog/tags")
      articles.each do |article|
        ls.append([article.tags, article.title, article.date.strftime('%Y-%m-%d'), article.url, has_audio?(article)])
      end
    else
      # TODO(strategineer): This code could use a refactoring
      # This code aggregates articles tagged with "ramble" so that they don't take up too much space on the website given the lower quality
      articles.each do |article|
        is_ramble = article.tags.include?("ramble")
        if not is_ramble
          if is_previous_ramble and rambles_ls.length() > 0
            start_date = rambles_ls[0].date.strftime('%Y-%m-%d')
            if rambles_ls.length() == 1
              is_are = "is"
              plural_indicator = ""
            else
              is_are = "are"
              plural_indicator = "s"
            end
            ls.append([["ramble"], "... there #{is_are} #{rambles_ls.length()} other low effort \"ramble\" blog post#{plural_indicator} here.", start_date, "/blog/tags/ramble", false])
            rambles_ls = []
          end
          ls.append([article.tags, article.title, article.date.strftime('%Y-%m-%d'), article.url, has_audio?(article)])
        else
          if is_previous_ramble
            # don't post, just aggregate
            rambles_ls.append(article)
          else
            ls.append([article.tags, article.title, article.date.strftime('%Y-%m-%d'), article.url, has_audio?(article)])
          end
        end
        is_previous_ramble = is_ramble
      end
    end
    ls.each do |tags, title, date, url, has_audio|
      row_style_class = ""
      if tags.include?("ramble")
        tags.delete("ramble")
        row_style_class = "less-important"
      end
      res <<
      %{
    <tr>
      <td class="table-nowrap">
        <div>
          #{date}
        </div>
      </td>
      <td class="#{row_style_class}">
        <a href="#{url}">
          <div>
      }
      if has_audio
        res <<
        %{
        🎧
        }
      end
      res <<
      %{
          #{title}
          </div>
        </a>
      </td>
      <td class="d-none d-md-table-cell">#{tags.collect{ |t| link_to t, tag_path(t) }.join(' - ')}</td>
    </tr>
      }
    end
    res <<
    %{
  </tbody>
</table>
    }
    return res
  end

  def stl(filename, height=300, width=420)
    res = %{
<script src="https://embed.github.com/view/3d/strategineer/3D-printing/master/stl/#{filename}.stl?height=#{height}&width=#{width}"></script>
    }
    return res;
  end
end
