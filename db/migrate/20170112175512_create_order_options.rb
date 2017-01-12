class CreateOrderOptions < ActiveRecord::Migration
  def change
    create_table :order_options do |t|
      t.float :cost, null:false
      t.integer :qty, null:false
      t.text :description
      t.integer :batch_id, null:false
    end
    add_index :order_options, :batch_id

  end
end
