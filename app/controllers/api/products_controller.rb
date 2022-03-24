class Api::ProductsController < ApplicationController

    def index
        # show all products for now, later will have params for filter
        puts params[:filters]
        puts "test"
        @products = Product.all
        render :index
    end

    def show
        @product = Product.find(params[:id])
        render :show
    end

end

# example for filtering
# @watch_lists = MyWatchList
# .where(profile_id: params[:profile_id])

# customer = Customer.order(:first_name).first(3)
# best seller (most reviews), price (high to low and low to high), newest, top rated (highest average rating)