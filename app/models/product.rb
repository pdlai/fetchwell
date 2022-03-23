class Product < ApplicationRecord

    validates :name, :gender, :category, :subcategory, :price, :description, :image_url, presence: true

    has_many :cart_items,
        foreign_key: :product_id,
        class_name: :CartItem

    has_many :reviews,
        foreign_key: :product_id,
        class_name: :Review

end
