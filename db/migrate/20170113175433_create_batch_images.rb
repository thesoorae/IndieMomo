class CreateBatchImages < ActiveRecord::Migration
  def change
    create_table :batch_images do |t|
      t.string :url, null:false
      t.integer :batch_id, null:false 

      t.timestamps null: false
    end
    add_index :batch_images, :batch_id
  end
end
