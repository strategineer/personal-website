# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions
# config.rb

activate :syntax, :line_numbers => true
set :markdown_engine, :kramdown


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
    blog.year_link = "calendar/{year}.html"
    blog.month_link = "calendar/{year}/{month}.html"
    blog.day_link = "calendar/{year}/{month}/{day}.html"
    blog.default_extension = ".markdown"

    blog.tag_template = "tags/reviews.html"
    blog.calendar_template = "calendars/reviews.html"

    # Enable pagination
    blog.paginate = false
    # blog.per_page = 10
    blog.page_link = "page/{num}"

    blog.custom_collections = {
        category: {
          link: '/categories/{category}.html',
          template: 'reviews_category.html'
        }
      }
end

activate :blog do |blog|
    blog.name = "journals"
    blog.prefix = "journals"

    blog.permalink = "{year}/{month}/{day}/{title}.html"
    # Matcher for blog source files
    blog.sources = "{year}-{month}-{day}-{title}.html"
    blog.taglink = "tags/{tag}.html"
    blog.layout = "blogpost_journal"
    # blog.summary_separator = /(READMORE)/
    # blog.summary_length = 250
    blog.year_link = "calendar/{year}.html"
    blog.month_link = "calendar/{year}/{month}.html"
    blog.day_link = "calendar/{year}/{month}/{day}.html"
    blog.default_extension = ".markdown"

    blog.tag_template = "tags/journals.html"
    blog.calendar_template = "calendars/journals.html"

    # Enable pagination
    blog.paginate = false
    # blog.per_page = 20
    blog.page_link = "page/{num}"
end

activate :blog do |blog|
    # This will add a prefix to all links, template references and source paths
    blog.name = "projects"
    blog.prefix = "projects"

    blog.permalink = "{year}/{month}/{day}/{title}.html"
    # Matcher for blog source files
    blog.sources = "{year}-{month}-{day}-{title}.html"
    blog.taglink = "tags/{tag}.html"
    blog.layout = "blogpost_project"
    # blog.summary_separator = /(READMORE)/
    # blog.summary_length = 250
    blog.year_link = "calendar/{year}.html"
    blog.month_link = "calendar/{year}/{month}.html"
    blog.day_link = "calendar/{year}/{month}/{day}.html"
    blog.default_extension = ".markdown"

    blog.tag_template = "tags/projects.html"
    blog.calendar_template = "calendars/projects.html"

    # Enable pagination
    blog.paginate = false
    # blog.per_page = 20
    blog.page_link = "page/{num}"
end

page "feeds/projects.xml", layout: false
page "feeds/reviews.xml", layout: false
page "feeds/journal.xml", layout: false

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

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings
# Reload the browser automatically whenever files change
configure :build do
    activate :minify_css
    activate :minify_javascript
end

