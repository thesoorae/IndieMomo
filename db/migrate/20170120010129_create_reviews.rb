class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.text :review_text
      t.integer :user_id
      t.integer :batch_id

      t.timestamps null: false
    end
    add_index :reviews, :user_id
    add_index :reviews, :batch_id
  end
end
