@cartItems.each do |cartItem|
    json.set! cartItem.id do
        json.extract! cartItem, :id, :quantity, :size, :user_id, :product_id
        json.product do
            json.extract! cartItem.product, :id, :name, :gender, :category, :price, :description
            json.photoUrls cartItem.product.photos.map { |file| url_for(file) }
        end
    end
end