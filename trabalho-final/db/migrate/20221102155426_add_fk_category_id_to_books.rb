class AddFkCategoryIdToBooks < ActiveRecord::Migration[7.0]
  def change
    add_reference :books, :category
  end
end