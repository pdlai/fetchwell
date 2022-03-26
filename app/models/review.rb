class Review < ApplicationRecord

    validates :location, :overall_fit, :rating, :summary, :description, :author_id, :product_id, :nickname, presence: true

    belongs_to :user,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product

end
