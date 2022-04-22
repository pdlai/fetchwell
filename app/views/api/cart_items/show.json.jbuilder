json.extract! @cartItem, :id, :quantity, :size, :user_id, :product_id
json.product do
    json.extract! @cartItem.product, :id, :name, :gender, :category, :subcategory, :price, :description
end