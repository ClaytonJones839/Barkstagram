class Api::CommentsController < ApplicationController

    def show
        @comment = Comment.find_by(id: params[:id])
    end

    def index
        @comments = Comment.all.where(post_id: params[:post_id])
    end

    def create 
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id 

        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find_by(params[:id])
        if @comment && @comment.user_id == current_user.id
            @comment.destroy
            render :show
        else
            render json: ["User is only able to remove their own comments"], status: 422
        end
    end

    private
        def comment_params
            params.require(:comment).permit(:post_id, :body)
        end
end
