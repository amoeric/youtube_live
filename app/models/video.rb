class Video < ApplicationRecord

  def init(url)
    VideoInfo.new(url)
  end

  def set
    init(self.url)
  end

  def self.active
    where(active:true)
  end
end
