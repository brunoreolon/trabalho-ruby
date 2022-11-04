class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :language
      t.string :num_pages

      t.timestamps
    end
  end
end