@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :location, :overall_fit, :rating, :summary, :description, :nickname, :product_id, :created_at
    end
end