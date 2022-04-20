@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :name, :gender, :category, :subcategory, :price, :description
        json.photoUrls product.photos.map { |file| url_for(file) }
    end
end