class ChangeCategoryColumnNameBatches < ActiveRecord::Migration
  def change
    rename_column :batches, :category_id, :category
    change_column :batches, :category, :string
  end
end
