class Api::PostsController < ApplicationController

  before_action :require_logged_in
  
  def index
    @posts = Post.all
    render :index
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
      if @post.update(post_params)
          render :show
      else
          render json: @post.errors.full_messages, status: 422
      end
  end

  def destroy 
    @post = Post.find(params[:id])
      if @post.user_id = current_user.id 
        @post.destroy
      else 
        render json: ["Users are only able to delete pictures they have posted"], status: 401
      end

      render :index
  end
  
  private

  def post_params
    params.require(:post).permit(:body, :photo, :user_id)
  end
end