class Book < ApplicationRecord

    validates :language, presence: true
    validates :num_pages, presence: true
    belongs_to :category
    scope :published, -> { where('published_at < ?', Time.now) }
    belongs_to :author, class_name: "Author"
    belongs_to :publisher, class_name: "Publisher"
  end
  