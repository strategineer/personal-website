# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions
# config.rb
activate :robots,
  :rules => [
    {:user_agent => 'Googlebot', :allow => %w(/)},
    {:user_agent => 'Googlebot-Image', :allow => %w(/)},
    {:user_agent => '*', :disallow => %w(/)}
  ],
  :sitemap => "http://localhost:4567/__middleman/sitemap/"

activate :blog do |blog|
    blog.name = "reviews"
    blog.prefix = "reviews"

    blog.permalink = "{category}/{year}/{month}/{day}/{title}.html"
    # Matcher for blog source files
    blog.sources = "{year}-{month}-{day}-{title}.html"
    blog.taglink = "tags/{tag}.html"
    blog.layout = "blogpost_review"
    # blog.summary_separator = /(READMORE)/
    # blog.summary_length = 250
    blog.year_link = "{year}.html"
    blog.month_link = "{year}/{month}.html"
    blog.day_link = "{year}/{month}/{day}.html"
    blog.default_extension = ".markdown"

    blog.tag_template = "tags/reviews.html"
    blog.calendar_template = "calendars/reviews.html"

    # Enable pagination
    blog.paginate = true
    blog.per_page = 10
    blog.page_link = "page/{num}"

    blog.custom_collections = {
        category: {
          link: '/categories/{category}.html',
          template: 'reviews_category.html'
        }
      }
end

activate :blog do |blog|
    # This will add a prefix to all links, template references and source paths
    blog.name = "games"
    blog.prefix = "games"

    blog.permalink = "{year}/{month}/{day}/{title}.html"
    # Matcher for blog source files
    blog.sources = "{year}-{month}-{day}-{title}.html"
    blog.taglink = "tags/{tag}.html"
    blog.layout = "blogpost_game"
    # blog.summary_separator = /(READMORE)/
    # blog.summary_length = 250
    blog.year_link = "{year}.html"
    blog.month_link = "{year}/{month}.html"
    blog.day_link = "{year}/{month}/{day}.html"
    blog.default_extension = ".markdown"

    blog.tag_template = "tags/games.html"
    blog.calendar_template = "calendars/games.html"

    # Enable pagination
    blog.paginate = true
    blog.per_page = 12
    blog.page_link = "page/{num}"
end

page "feeds/games.xml", layout: false
page "feeds/reviews.xml", layout: false

#
activate :autoprefixer do |prefix|
    prefix.browsers = "last 2 versions"
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/
#
# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings
# Reload the browser automatically whenever files change
configure :development do
    activate :livereload
end

configure :build do
    activate :minify_css
    activate :minify_javascript
end

set :build_dir, 'C:\mongoose_server'
