class ChangeReviewColumnAuthor < ActiveRecord::Migration[5.2]
  def change
    rename_column :reviews, :author, :nickname
  end
end
