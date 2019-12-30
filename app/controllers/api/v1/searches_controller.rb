class Api::V1::SearchesController < ApplicationController
    def index
      @video = Video.active.last.set
    end
end
