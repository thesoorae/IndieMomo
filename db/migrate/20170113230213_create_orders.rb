class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :order_option_id, null: false
      t.integer :customer_id, null:false

      t.timestamps null: false
    end
    add_index :orders, :order_option_id
    add_index :orders, :customer_id
  end
end
