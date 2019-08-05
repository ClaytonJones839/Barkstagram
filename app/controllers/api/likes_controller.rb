class Api::LikesController < ApplicationController

    def create 
        @like = Like.new(like_params)
        @like.user_id = current_user.id 

        if @like.save
            render :show
        else
            render json @like.errors_full_messages, status: 422
        end
    end

    def destroy
        @like = Like.find_by(user_id: current_user.id, post_id: params[:id])
        if @like 
            @like.destroy
            render :show
        else
            render json: ["User is only able to remove their own likes"], status: 422
        end
    end

    private
        def like_params
            params.require(:like).permit(:post_id)
        end
end
