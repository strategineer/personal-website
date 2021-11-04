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

activate :graphviz

activate :blog do |blog|
    blog.name = "reviews"
    blog.prefix = "reviews"

    blog.permalink = "{category}/{year}-{month}-{day}.html"
    # Matcher for blog source files
    blog.sources = "{year}-{month}-{day}.html"
    blog.taglink = "tags/{tag}.html"
    blog.layout = "blogpost_review"
    # blog.summary_separator = /(READMORE)/
    # blog.summary_length = 250
    blog.year_link = "calendar/{year}.html"
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
    blog.name = "blog"
    blog.prefix = "blog"

    blog.permalink = "{year}-{month}-{day}.html"
    # Matcher for blog source files
    blog.sources = "{year}-{month}-{day}.html"
    blog.taglink = "tags/{tag}.html"
    blog.layout = "blogpost_blog"
    # blog.summary_separator = /(READMORE)/
    # blog.summary_length = 250
    blog.year_link = "calendar/{year}.html"
    blog.default_extension = ".markdown"

    blog.tag_template = "tags/blog.html"
    blog.calendar_template = "calendars/blog.html"

    # Enable pagination
    blog.paginate = false
    # blog.per_page = 20
    blog.page_link = "page/{num}"
end

activate :blog do |blog|
    # This will add a prefix to all links, template references and source paths
    blog.name = "projects"
    blog.prefix = "projects"

    blog.permalink = "{year}-{month}-{day}.html"
    # Matcher for blog source files
    blog.sources = "{year}-{month}-{day}.html"
    blog.taglink = "tags/{tag}.html"
    blog.layout = "blogpost_project"
    # blog.summary_separator = /(READMORE)/
    # blog.summary_length = 250
    blog.default_extension = ".markdown"

    blog.tag_template = "tags/projects.html"
    blog.calendar_template = "calendars/projects.html"

    # Enable pagination
    blog.paginate = false
    # blog.per_page = 20
    blog.page_link = "page/{num}"
end

activate :blog do |blog|
    # This will add a prefix to all links, template references and source paths
    blog.name = "food"
    blog.prefix = "food"

    blog.permalink = "{id_title}.html"
    # Matcher for blog source files
    blog.sources = "{id_title}.html"
    blog.taglink = "tags/{tag}.html"
    blog.layout = "blogpost_food"
    # blog.summary_separator = /(READMORE)/
    # blog.summary_length = 250
    blog.default_extension = ".markdown"

    blog.tag_template = "tags/food.html"
    blog.calendar_template = "calendars/food.html"

    # Enable pagination
    blog.paginate = false
    # blog.per_page = 20
    blog.page_link = "page/{num}"
end

activate :blog do |blog|
    # This will add a prefix to all links, template references and source paths
    blog.name = "cocktails"
    blog.prefix = "cocktails"

    blog.permalink = "{id_title}.html"
    # Matcher for blog source files
    blog.sources = "{id_title}.html"
    blog.taglink = "tags/{tag}.html"
    blog.layout = "blogpost_cocktails"
    # blog.summary_separator = /(READMORE)/
    # blog.summary_length = 250
    blog.default_extension = ".markdown"

    blog.tag_template = "tags/cocktails.html"
    blog.calendar_template = "calendars/cocktails.html"

    # Enable pagination
    blog.paginate = false
    # blog.per_page = 20
    blog.page_link = "page/{num}"
end

activate :imageoptim do |options|
  # Use a build manifest to prevent re-compressing images between builds
  options.manifest = true

  # Silence problematic image_optim workers
  options.skip_missing_workers = true

  # Cause image_optim to be in shouty-mode
  options.verbose = false

  # Setting these to true or nil will let options determine them (recommended)
  options.nice = true
  options.threads = true

  # Image extensions to attempt to compress
  options.image_extensions = %w(.jpg)

  # Compressor worker options, individual optimisers can be disabled by passing
  # false instead of a hash
  options.jpegoptim = { :strip => ['all'], :allow_lossy => true, :max_quality => 60}
  options.jpegtran  = { :copy_chunks => false, :progressive => true, :jpegrescan => false }
  options.advpng    = false
  options.gifsicle  = false
  options.optipng   = false
  options.pngcrush  = false
  options.pngout    = false
  options.svgo      = false
end

page "feeds/projects.xml", layout: false
page "feeds/reviews.xml", layout: false
page "feeds/blog.xml", layout: false

#
activate :autoprefixer do |prefix|
    prefix.browsers = "last 2 versions"
end

activate :directory_indexes

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
#
config[:sass_assets_paths] << Bootstrap.stylesheets_path

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings
# Reload the browser automatically whenever files change
configure :build do
    activate :minify_css
    activate :minify_javascript
end

activate :livereload
