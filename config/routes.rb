Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
  #  resources :benches, only: [:index, :create, :show]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end


end
