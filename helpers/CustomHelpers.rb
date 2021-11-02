module CustomHelpers
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
    ls = ls.sort { |a, b| a.date <=> b.date }.reverse
    max_count = max_count.nil? ? ls.size : max_count
    return [ls.take(max_count), [ls.size - max_count, 0].max]
  end

  def get_next_article(blog_type=nil)
    ls = get_articles_shortlist(nil, blog_type, exclude_self=false)[0]
    entry_index = ls.index{|x| get_article_id(current_page) == get_article_id(x)}
    return (entry_index.nil? or entry_index - 1 < 0) ? nil : ls[entry_index - 1]
  end

  def get_previous_article(blog_type=nil)
    ls = get_articles_shortlist(nil, blog_type, exclude_self=false)[0]
    entry_index = ls.index{|x| get_article_id(current_page) == get_article_id(x)}
    return (entry_index.nil? or ls.size == entry_index) ? nil : ls[entry_index + 1]
  end

  def has_thumbnail?(article)
    return get_thumbnail_path(article) != ""
  end

  def get_thumbnail_path(article)
    # this doesn't work because request path doesn't work on the projects page
    id = get_article_id(article)
    thumbnail_path = "/images/#{article.data.blog}/#{id}"
    source_thumbnail_path = "source#{thumbnail_path}"
    glob = Dir.glob("#{source_thumbnail_path}/thumbnail.*")
    if not glob[0]
      return ""
    end
    return "#{thumbnail_path}/#{File.basename(glob[0])}"
  end

  def has_video?(article)
    return !article.data.youtube_video_id.nil?
  end

  def has_audio?(article)
    id = get_article_id(article)
    audio_path = "source/#{article.data.blog}/#{id}/audio.mp3"
    return File.file?(audio_path)
  end

  def count_article_images?(article)
    id = get_article_id(article)
    images_path = "/images/#{article.data.blog}/#{id}/screenshots"
    source_images_path = "source#{images_path}"
    n_images = 0
    if Dir.exists?(source_images_path)
      Dir.foreach(source_images_path) do |file|
        if File.file?("#{source_images_path}/#{file}")
          n_images += 1
        end
      end
    end
    return n_images
  end
  def get_images(article, use_thumbnail_as_screenshot)
    res = []
    id = get_article_id(article)
    images_path = "/images/#{article.data.blog}/#{id}/screenshots"
    source_images_path = "source#{images_path}"
    if use_thumbnail_as_screenshot
      if has_thumbnail?(article)
        thumbnail_path = get_thumbnail_path(article)
        next_data = OpenStruct.new(:name => "thumbnail", :screenshot_path => thumbnail_path)
        res.push(next_data)
      end
    end
    if Dir.exists?(source_images_path)
      Dir.foreach(source_images_path) do |file|
        if File.file?("#{source_images_path}/#{file}")
          name = File.basename(file, File.extname(file))
          screenshot_path = "#{images_path}/#{file}"
          next_data = OpenStruct.new(:name => name, :screenshot_path => screenshot_path)
          res.push(next_data)
        end
      end
    end
    return res
  end

  def try_page_audio(page)
    has_audio = has_audio?(page)
    res = ""
    if has_audio
      res <<
      %{
<div class="d-flex justify-content-center readable">
    <div class="col-12">
      <div class="d-flex align-items-center justify-content-center">
        <figure>
          <figcaption>Listen to this essay if you prefer:</figcaption>
          <audio
            controls
            src="./audio.mp3">
                Your browser does not support the
                <code>audio</code> element.
          </audio>
        </figure>
      </div>
    </div>
</div>
      }
    end
    return res
  end

  def try_page_video(page)
    has_video = has_video?(page)
    res = ""
    if has_video
      res <<
      %{
<div class="d-flex justify-content-center readable">
    <div class="col-12">
      <div class="d-flex align-items-center justify-content-center">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/#{page.data.youtube_video_id}?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
</div>
      }
    end
    return res
  end

  def page_images_multiple(page, use_thumbnail_as_screenshot=false)
    res = ""
    res <<
    %{
      <div id="carouselScreenshots" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
      }
      index = 0
      get_images(page, use_thumbnail_as_screenshot).each do |data|
        res <<
        %{
            <li data-bs-target="#carouselScreenshots" data-bs-slide-to="#{index}" class="#{index == 0 ? "active" : ''}"></li>
        }
        index = index + 1
      end
      res <<
      %{
        </ol>
        <div class="carousel-inner">
      }
      index = 0
      get_images(page, use_thumbnail_as_screenshot).each do |data|
        res <<
        %{
            <div class="carousel-item#{index == 0 ? " active" : ''}">
              <img class="rounded d-block w-100" src="#{data.screenshot_path}" alt="#{data.name}"/>
            </div>
        }
        index = index + 1
      end
      res <<
      %{
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselScreenshots" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselScreenshots" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      }
      return res
  end

  def page_images_singular(page, use_thumbnail_as_screenshot=false)
    res = ""
    get_images(page, use_thumbnail_as_screenshot).each do |data|
      res <<
      %{
        <img src="#{data.screenshot_path}" class="img-fluid rounded mx-auto d-block" alt="#{data.name}">
      }
    end
    return res
  end

  def try_page_images(page, use_thumbnail_as_screenshot=false)
    n_images = count_article_images?(page)
    if has_thumbnail?(page) and use_thumbnail_as_screenshot
      n_images += 1
    end
    res = ""
    if n_images > 0
      res <<
      %{
<div class="d-flex justify-content-center readable">
  <div class="col-12">
      }
      if n_images > 1
        res += page_images_multiple(page, use_thumbnail_as_screenshot)
      end
      if n_images == 1
        res += page_images_singular(page, use_thumbnail_as_screenshot)
      end
      res <<
      %{
  </div>
</div>
      }
    end
    return res
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

  def button(onclick, icon)
    return  %{
       <div class="col justify-content-left">
         <button onclick="#{onclick}">#{icon}</button>
       </div>
    }
  end

  def randomArticleButton(articles)
    urls = articles.collect{|x| x.url }
    joined_urls = "['" + urls.join("','") + "']"
    return button("goToRandomUrl(#{joined_urls})", "🎲")
  end
  def goBackToMainPageButton()
    return button("goBackToMainPage()", "🏠")
  end

  def album(articles, is_main_page, title = nil, pred = nil, sort_fn = nil)
    if pred.nil?
      pred = lambda {|p| true}
    end
    if sort_fn.nil?
      sort_fn = lambda { |a, b| b.date <=> a.date }
    end
    filtered_articles = articles.select{|p| pred.call(p)}
    if filtered_articles.length == 0
      return ""
    end
    res = ""
    if not title.nil? and not title.empty?
      res <<
      %{
<div class="container-fluid album-title">
      }
      res << page_title(title, is_main_page, filtered_articles)
      res <<
      %{
</div>
      }
    end
    res <<
    %{
<div class="container-fluid album">
  <div class="row row-album justify-content-center">
    }
    filtered_articles.sort{ |a, b| sort_fn.call(a, b) }.each do |article|
      tags_subtitle =  article.tags.select{|t| link_to t, tag_path(t)}.join(" - ")
      res <<
      %{
            <div class="col">
              <a href="#{article.url}">
                <div class="card mx-auto">
                  <img class="card-img-top" src="#{get_thumbnail_path(article)}" alt="#{article.title} Thumbnail"></img>
                  <div class="card-body mb-3">
                    <h5 class="card-title">#{article.title}</h5>
                    <h6 class="card-subtitle mb-2">#{tags_subtitle}</h6>
      }
      unless article.data.blurb.nil?
        res <<
        %{
                    <p class="card-text">#{article.data.blurb}</p>
        }
      end
      res <<
      %{
                  </div>
                </div>
              </a>
            </div>
      }
    end
    res <<
    %{
  </div>
</div>
    }
    return res
  end

  def page_info(article)
    res = ""
    res <<
    %{
<div class="d-flex justify-content-center text-center page-reading-time">
#{reading_time(article)} read
</div>
    }
    return res
  end

  def inline_list(ls)
    if ls.length == 0
      return ""
    end
    res = ""
    res << %{
    <div class="d-flex justify-content-center d-flex-inline-list">
      <div class="text-center">
        <ul class="list-inline ul-inline">
     }
    ls.each do |e|
      res << %{
          <li class="list-inline-item li-inline">
      }
      res << e
      res << %{
          </li>
      }
    end
    res << %{
       </ul>
     </div>
   </div>
    }
    return res
  end

  def menu_buttons(is_main_page, articles=nil)
    ls = []
    if not is_main_page
      ls.append(goBackToMainPageButton())
    end
    if not articles.nil?
      ls.append(randomArticleButton(articles))
    end
    return inline_list(ls)
  end

  def page_title(title, is_main_page, articles=nil)
    res = ""
    res << %{
<div class="container justify-content-center text-center page-title">
    }
    res << menu_buttons(is_main_page, articles)
    res << %{
  <div class="row">
    <h1>
        #{title}
    </h1>
  </div>
    }
    res << %{
</div>
    }
    return res
  end

  def portfolio(title = nil)
    portfolio_path = "/images/portfolio"
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
    articles.each do |article|
      row_style_class = ""
      if article.tags.include?("ramble")
        row_style_class = "less-important"
      end
      res <<
      %{
    <tr class="#{row_style_class}">
      <td class="table-nowrap">
        <a href="#{blog_year_path(article.date.year)}">
          <div>
            #{article.date.strftime('%Y-%m-%d')}
          </div>
        </a>
      </td>
      <td>
        <a href="#{article.url}">
          <div>
      }
      if has_audio?(article)
        res <<
        %{
        🎧
        }
      end
      res <<
      %{
          #{article.title}
          </div>
        </a>
      </td>
      <td class="d-none d-md-table-cell">#{article.tags.collect{ |t| link_to t, tag_path(t) }.join(' - ')}</td>
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

  def has_tags?(page)
    return (defined?(page.date) and not page.tags.nil? and page.tags.size > 0)
  end

  def page_tags(page, should_show_year_tags=true)
    res = ""
    if defined?(page.date)
      ls = []
      if should_show_year_tags
        ls.append(link_to page.date.year, blog_year_path(page.date.year))
      end
      if not page.tags.nil? and not page.tags.size == 0
        ls += page.tags.collect{ |x| link_to x, tag_path(x)}
      end
      res << inline_list(ls)
    end
    return res
  end

  def page_links(page)
    if not current_page.data.links.nil? and not current_page.data.links.length == 0
      return inline_list(current_page.data.links.collect{ |l| l.split(',')}.collect{ |l| link_to l[0], l[1]})
    end
    return ""
  end

  def stl(filename, height=300, width=420)
    res = %{
<script src="https://embed.github.com/view/3d/strategineer/3D-printing/master/stl/#{filename}.stl?height=#{height}&width=#{width}"></script>
    }
    return res;
  end

  def get_review_categories_data()
    res = []
    articles = blog('reviews').articles
    data.review_categories.each do |c|
      name = c.name
      category = c.category
      count = articles.count{ |x| x.data['category'] == c.category };
      next_data = OpenStruct.new(:name => name, :category => category, :count => count)
      res.push(next_data)
    end
    return res
  end

  def word_count(article)
    n_body = article.body.split.size
    n_outro = article.data.outro.nil? ? 0 : article.data.outro.split.size
    n_pros = article.data.pros.nil? ? 0 : article.data.pros.inject(0){|sum,x| sum + x.split.size }
    n_cons = article.data.cons.nil? ? 0 : article.data.cons.inject(0){|sum,x| sum + x.split.size }
    return n_body + n_outro + n_pros + n_cons
  end

  def reading_time(article)
    words_per_minute = 160
    words = word_count(article)
    minutes = (words/words_per_minute).floor
    return minutes >= 1 ? "#{minutes} min" : '< 1 min'
  end
end
