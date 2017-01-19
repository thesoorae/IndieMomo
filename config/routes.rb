Rails.application.routes.draw do
 root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session, only: [:create, :destroy, :show]
    resources :batches do
      collection do
        get 'search/:title', to: 'batches#search'
      end
      resources :order_options, only:[:create, :update, :destroy]
      resources :batch_images, only: [:create, :destroy, :index]
    end
    resources :orders, only:[:create, :destroy]
  end

 end
