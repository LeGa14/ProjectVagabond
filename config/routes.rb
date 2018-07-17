Rails.application.routes.draw do
  namespace :api do
    namespace :cities do
      get 'posts/index'
      get 'posts/show'
      get 'posts/create'
      get 'posts/update'
      get 'posts/destroy'
    end
  end
  namespace :api do
    get 'cities/index'
    get 'cities/create'
    get 'cities/show'
    get 'cities/update'
    get 'cities/destroy'
  end
  namespace :api do
    resources :cities do
      resources :posts
    end
  end
end
