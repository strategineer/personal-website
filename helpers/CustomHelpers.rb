module CustomHelpers
    def get_article_id(article)
        path = article.source_file
        ext = article.ext
        res = path.match(/\/([^\/]+)#{ext}/)
        return res.captures[0]
    end
    def has_project_thumbnail(article)
      return get_project_thumbnail_path(article) != ""
    end
    def get_project_thumbnail_path(article)
# this doesn't work because request path doesn't work on the projects page
        id = get_article_id(article)
        thumbnail_path = "/images/projects/#{id}"
        source_thumbnail_path = "source#{thumbnail_path}"
        glob = Dir.glob("#{source_thumbnail_path}/thumbnail.*")
        if not glob[0]
          return ""
        end
        return "#{thumbnail_path}/#{File.basename(glob[0])}"
    end
    def has_project_images?(article)
        id = get_article_id(current_article)
        images_path = "/images/projects/#{id}/screenshots"
        source_images_path = "source#{images_path}"
        Dir.foreach(source_images_path) do |file|
            if File.file?("#{source_images_path}/#{file}")
                return true
            end
        end
        return false
    end
    def get_project_images(article)
        res = []
        id = get_article_id(current_article)
        images_path = "/images/projects/#{id}/screenshots"
        source_images_path = "source#{images_path}"
        Dir.foreach(source_images_path) do |file|
            if File.file?("#{source_images_path}/#{file}")
                name = File.basename(file, File.extname(file))
                screenshot_path = "#{images_path}/#{file}"
                next_data = OpenStruct.new(:name => name, :screenshot_path => screenshot_path)
                res.push(next_data)
            end
        end
        return res
    end
    def project_album(projects)
        res =
%{
<div class="album text-muted">
    <div class="row">
}
        projects.each do |project|
          tags_subtitle =  project.tags.join(" - ")
            res <<
%{
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card">
                <a href="#{project.url}">
                    <img class="card-img-top" src="#{get_project_thumbnail_path(project)}" alt="#{project.title} Thumbnail">
                    <div class="card-body">
                        <h5 class="card-title">#{project.title}</h4>
                        <p class="card-text">#{tags_subtitle}</p>
                    </div>
                </a>
            </div>
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
end
