class ChangeUsers < ActiveRecord::Migration[5.2]
  def change
    add_index :users, :username, unique: true
    add_column :users, :session_token, :string
    remove_column :users, :email
  end
end
