json.extract! post, :id, :user_id, :body
json.photoUrl url_for(post.photo)