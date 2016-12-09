if Rails.application.secrets.redis_connection.present?
  uri = URI.parse(Rails.application.secrets.redis_connection)
  REDIS = Redis.new(:host => uri.host, :port => uri.port, :password => uri.password)
end