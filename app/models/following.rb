class Following < ApplicationRecord
    validates :user_id, uniqueness: { scope: :followed_user_id }
    
    belongs_to :user

    has_many :followed_users,
        foreign_key: :followed_user_id,
        class_name: :user
end
