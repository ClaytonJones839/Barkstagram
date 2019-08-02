json.extract! user, :id, :username, :email, :bio
json.photoUrl url_for(user.photo)