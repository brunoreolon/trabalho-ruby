Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # Authors
      resources :authors

      # Categories
      resources :categories

      # Publishers
      resources :publishers
      
      # books
      resources :books
    end
  end
end
