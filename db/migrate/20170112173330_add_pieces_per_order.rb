class AddPiecesPerOrder < ActiveRecord::Migration
  def change
    add_column :batches, :qty_in_order, :integer, default:1
  end
end
