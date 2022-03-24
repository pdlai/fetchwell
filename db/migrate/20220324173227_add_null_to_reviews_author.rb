class AddNullToReviewsAuthor < ActiveRecord::Migration[5.2]
  def change
    change_column_null :reviews, :author, false
  end
end
