class VideosController < ApplicationController

  def index
    @video = Video.active.first
  end
end