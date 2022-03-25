Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    # auth routes
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]

    # resources
    resources :cart_items, only: [:index, :destroy, :create, :update]
    resources :products, only: [:index, :show]
    resources :reviews, only: [:create, :index]
    resources :likes, only: [:create, :destroy]

  end

end

# index create new edit show update destroy