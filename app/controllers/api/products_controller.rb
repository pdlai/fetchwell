class Api::ProductsController < ApplicationController

    def index
        @products = Product.with_attached_photos.where(category: params[:filters][:category])
        render :index
    end

    def show
        @product = Product.with_attached_photos.find(params[:id])
        render :show
    end

end

# example for filtering
# @watch_lists = MyWatchList
# .where(profile_id: params[:profile_id])

# customer = Customer.order(:first_name).first(3)
# best seller (most reviews), price (high to low and low to high), newest, top rated (highest average rating)