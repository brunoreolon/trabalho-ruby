class Publisher < ApplicationRecord
  
    has_many :books, foreign_key: :publisher_id
  
    validates :name, presence: true
  end
  