class Remove < ActiveRecord::Migration
  def change
    remove_column :batches, :qty_in_order
  end
end
