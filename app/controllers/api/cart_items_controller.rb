class Api::CartItemsController < ApplicationController

    def index
        @cartItems = CartItem.where(user_id: params[:userId])
        render :index
    end

    def create
        @cartItem = CartItem.new(cart_item_params)
        if @cartItem.save
            render :show
        else
            render json: @cartItem.errors.full_messages, status: 422
        end
    end

    def update
        @cartItem = CartItem.find(params[:id])
        puts "update here"
        if @cartItem.update(cart_item_params)
            render :show
        else
            render json: @cartItem.errors.full_messages, status: 422
        end
    end

    def destroy
        @cartItem = CartItem.find(params[:id])
        if @cartItem.destroy
            render :show
        else
            render json: @cartItem.errors.full_messages, status: 422
        end
    end

    private
    def cart_item_params
        params.require(:cartItem).permit(:quantity, :size, :user_id, :product_id)
    end

end
