class AddColumnActiveBatches < ActiveRecord::Migration
  def change
    add_column :batches, :active, :boolean, default:false
  end
end
