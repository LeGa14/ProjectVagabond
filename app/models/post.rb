class Post < ApplicationRecord
  belongs_to :city
  belongs_to :user
  validates :title, length: { in: 1..200}
  validates :body, length: { minimum: 1 }
end
