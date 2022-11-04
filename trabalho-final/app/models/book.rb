class Book < ApplicationRecord

    belongs_to :category
    belongs_to :author, class_name: "Author"
    belongs_to :publisher, class_name: "Publisher"
  
    scope :published, -> { where('published_at < ?', Time.now) }

    validates :language, presence: true
    validates :num_pages, presence: true
  end
  