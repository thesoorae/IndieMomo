Rails.application.routes.draw do
 root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session, only: [:create, :destroy, :show]
    resources :batches
    resources :order_options
    resources :orders, only:[:create, :destroy]
  end

 end
