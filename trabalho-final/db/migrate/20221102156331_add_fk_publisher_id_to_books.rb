class AddFkPublisherIdToBooks < ActiveRecord::Migration[7.0]
  def change
    add_reference(:books, :publisher, foreign_key: { to_table: :publishers })
  end
end
