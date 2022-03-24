json.extract! @product, :id, :name, :gender, :category, :subcategory, :price, :description, :image_url

json.reviews do
    if(@product.reviews.length >= 1)
        json.array! @product.reviews, :id, :location, :overall_fit, :rating, :summary, :description, :author, :product_id, :created_at
    end
end

# @reviews.each do |review|
#     json.set! review.id do
#         json.extract! review, :id, :location, :overall_fit, :rating, :summary, :description, :author, :product_id
#     end
# end