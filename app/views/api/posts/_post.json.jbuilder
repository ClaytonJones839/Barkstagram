json.extract! post, :id, :user_id, :body
json.author post.user.username
json.photoUrl url_for(post.photo)

