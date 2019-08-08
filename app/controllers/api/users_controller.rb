class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    # this should zip a file from the rails app
    # doing this to prevent error from has_one_attached assoc. in user model
    @user.photo.attach(io: File.open("#{Rails.root}/app/assets/images/default_profile_image.jpg"), filename: "default_profile_image.jpg")
    @user.bio = ""
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
      if @user
        render :show
      else
          render json: @user.errors.full_messages, status: 404
      end
  end

  def update
    @user = current_user
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
    render: index
  end


  private

  def user_params
    params.require(:user).permit(:username, :email, :bio, :photo, :password)
  end
end