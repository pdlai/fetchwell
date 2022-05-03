json.extract! @review, :location, :overall_fit, :rating, :summary, :description, :author_id, :product_id, :nickname
json.date Time.at(@review.created_at.to_i).strftime("%B %e, %Y")

