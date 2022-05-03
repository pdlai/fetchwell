@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :location, :overall_fit, :rating, :summary, :description, :nickname, :product_id
        json.date Time.at(review.created_at.to_i).strftime("%B %e, %Y")
    end
end