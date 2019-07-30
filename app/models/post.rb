class Post < ApplicationRecord
    belongs_to :author,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'User'

end
