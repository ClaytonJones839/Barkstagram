class Post < ApplicationRecord
    
    belongs_to :user
    has_one_attached :photo
    has_many :likes,
        dependent: :destroy
    has_many :likers,
        through: :likes,
        source: : user_id


end
