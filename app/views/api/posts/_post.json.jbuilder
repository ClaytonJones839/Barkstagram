json.extract! post, :id, :user_id, :body, :created_at
json.like_count post.likes.length
json.author post.user.username
json.authorPhotoUrl url_for(post.user.photo)
json.photoUrl url_for(post.photo)

