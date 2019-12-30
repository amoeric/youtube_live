server ENV["STAGING_IP"], user: "deploy", roles: %w{app db web}, my_property: :my_value    #指定主機ip, 使用者
set :deploy_to, "/data/store/deploy/youtube_live"
