@cartItems.each do |cartItem|
    json.set! cartItem.id do
        json.extract! cartItem, :id, :quantity, :size, :user_id, :product_id
        json.product do
            json.extract! cartItem.product, :id, :name, :gender, :category, :subcategory, :price, :description
        end
    end
end