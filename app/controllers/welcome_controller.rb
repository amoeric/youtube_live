class WelcomeController < ApplicationController

  def index
    @video = Video.active.first.set
  end
end