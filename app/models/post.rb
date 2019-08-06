class Post < ApplicationRecord
    validates :body, presence: true

    belongs_to :user
    has_one_attached :photo

    has_many :likes,
        dependent: :destroy

    has_many :likers,
        through: :likes,
        source: :user

    has_many :comments

end
