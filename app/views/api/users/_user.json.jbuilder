json.extract! user, :id, :username, :email, :bio
json.photoUrl url_for(user.photo)
json.followerIds user.followers.pluck(:id)
json.followingIds user.followings.pluck(:id)