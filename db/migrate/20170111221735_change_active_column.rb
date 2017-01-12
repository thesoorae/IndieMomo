class ChangeActiveColumn < ActiveRecord::Migration
  def change
    change_column :batches, :active, :boolean, default:true

  end
end
