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
end
