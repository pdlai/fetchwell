class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.where(product_id: params[:productId])
        render :index
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            # puts @review.errors.full_message
            render json: @review.errors.full_messages, status: 422
        end

    end

    private
    def review_params
        params.require(:review).permit(:location, :overall_fit, :rating, :summary, :description, :author_id, :product_id, :nickname)
    end

end
