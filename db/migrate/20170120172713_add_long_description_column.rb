class AddLongDescriptionColumn < ActiveRecord::Migration
  def change
    add_column :batches, :long_description, :text
  end
end
