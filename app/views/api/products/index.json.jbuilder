@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :name, :gender, :category, :subcategory, :price, :description, :image_url
    end
end