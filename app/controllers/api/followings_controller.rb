class Api::FollowingsController < ApplicationController

    def create
        @follow = Following.new(comment_params)
        @follow.user_id = current_user.id 

        if @follow.save
            render :show
        else
            render json: @follow.errors.full_messages, status: 422
        end
    end

    def destroy
        @follow = Following.find_by(id: params[:id])
        if @follow && @follow.user_id == current_user.id
            @follow.destroy
            render :show
        else
            render json: ["Not currently following"], status: 422
        end
    end

    def index
        @followings = Comment.all.where(user_id: params[:user_id])
    end

    def show
        @follow = Following.find_by(id: params[:id])
    end

    private
    def following_params
        params.require(:following).permit(:followed_user_id)
    end
end
