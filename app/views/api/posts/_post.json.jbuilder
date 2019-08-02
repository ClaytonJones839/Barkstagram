json.extract! post, :id, :user_id, :body, :created_at
json.author post.user.username
json.photoUrl url_for(post.photo)
json.authorPhotoUrl url_for(post.user.photo)
