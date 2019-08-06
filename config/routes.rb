Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:create, :show, :index, :update, :destroy] do 
      resources :comments, only: [:index]
    end
    resources :likes, only: [:create, :destroy, :show]
    resources :comments, only: [:create, :destroy, :show]
  end


end
