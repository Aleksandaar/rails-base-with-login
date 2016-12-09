Basic Rails 4 application.

Deployable to Heroku, includes Redis, Mail, Bootstrap.

The view is implemented using [Bootstrap 3](http://getbootstrap.com/).

### Gemfile

- [pg](http://rubygems.org/gems/pg) for PostgreSQL

For testing and development:

- [Rspec](https://github.com/dchelimsky/rspec)
- [Database_cleaner](https://github.com/bmabey/database_cleaner)
- [Factory Girl](https://github.com/thoughtbot/factory_girl_rails)
- [Shoulda](https://github.com/thoughtbot/shoulda)

### Setting up

- Make sure you have Ruby version from Gemfile.
- Please install Redis
- Install dependencies from Gemfile: `bundle install --path .bundle`.
- For Databes export environment variables `DATABASE_PASSWORD` and `DATABASE_USERNAME`.
- $ bundle exec rake db:create
- $ bundle exec rake db:migrate
- $ bundle exec rake db:test:prepare
- Make sure tests pass first
- $ bundle exec rspec spec/

### License

Basic upgraded from [Basic/Kolosek IT](https://github.com/kolosek/basic)©