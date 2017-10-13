module CustomHelpers
    def get_article_id(article)
        path = article.source_file
        ext = article.ext
        res = path.match(/\/([^\/]+)#{ext}/)
        return res.captures[0]
    end
    def get_game_primary_thumbnail_path(article)
# this doesn't work because request path doesn't work on the games page
        id = get_article_id(article)
        thumbnail_path = "/images/games/#{id}"
        source_thumbnail_path = "source#{thumbnail_path}"
        glob = Dir.glob("#{source_thumbnail_path}/thumbnail.*")
        return "#{thumbnail_path}/#{File.basename(glob[0])}"
    end
    def has_game_images?(article)
        id = get_article_id(current_article)
        images_path = "/images/games/#{id}/screenshots"
        source_images_path = "source#{images_path}"
        Dir.foreach(source_images_path) do |file|
            if File.file?("#{source_images_path}/#{file}")
                return true
            end
        end
        return false
    end
    def get_game_images(article)
        res = []
        id = get_article_id(current_article)
        images_path = "/images/games/#{id}/screenshots"
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
    def game_album(games)
        res =
%{
<div class="album text-muted">
    <div class="row">
}
        games.each do |game|
            res <<
%{
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card">
                <a href="#{game.url}">
                    <img class="card-img-top" src="#{get_game_primary_thumbnail_path(game)}" alt="#{game.title} Thumbnail">
                    <div class="card-body">
                        <h5 class="card-title">#{game.title}</h4>
                        <p class="card-text">(#{game.data.platforms}) - #{game.data.engine} - #{game.data.languages}</p>
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
