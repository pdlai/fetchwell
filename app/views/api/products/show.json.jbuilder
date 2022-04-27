json.extract! @product, :id, :name, :gender, :category, :price, :description
json.photoUrls @product.photos.map { |file| url_for(file) }
