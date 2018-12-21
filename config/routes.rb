Rails.application.routes.draw do
  namespace :api do 
    resources :categories do
      resources :cards
    end
  end

  get '*other', to: 'static#index'
end
