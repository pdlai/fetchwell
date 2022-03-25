class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.where(product_id: params[:productId])
        render :index
    end

    def create

    end

end
