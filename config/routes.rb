Rails.application.routes.draw do

  devise_for :users

  authenticated :user do
    root to: "pages#dashboard", as: :user_root
  end

  unauthenticated do
    root to: 'pages#new'
  end

end
