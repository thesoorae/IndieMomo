class CreateBatches < ActiveRecord::Migration
  def change
    create_table :batches do |t|
      t.string :title, null:false
      t.integer :category_id
      t.text :description
      t.integer :goal, null:false
      t.integer :zip_code, null:false
      t.text :order_description
      t.integer :chef_id, null:false

      t.timestamps null: false
    end
    add_index :batches, :title
    add_index :batches, :category_id
    add_index :batches, :zip_code
    add_index :batches, :chef_id
  end
end
