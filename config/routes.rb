Rails.application.routes.draw do
 root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session, only: [:create, :destroy, :show]
    resources :batches do
      resources :order_options, only:[:create, :update]
    end
    resources :orders, only:[:create, :destroy]
    resources :order_options, only: [:destroy]
  end

 end
