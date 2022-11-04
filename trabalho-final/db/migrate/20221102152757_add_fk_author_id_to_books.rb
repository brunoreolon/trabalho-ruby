class AddFkAuthorIdToBooks < ActiveRecord::Migration[7.0]
  def change
    add_reference(:books, :author, foreign_key: { to_table: :authors })
  end
end