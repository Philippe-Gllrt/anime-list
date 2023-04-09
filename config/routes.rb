Rails.application.routes.draw do
  resources :animes, except: %i[edit update]
  resources :recommendations, except: %i[edit update]
  devise_for :users
  root 'pages#home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
