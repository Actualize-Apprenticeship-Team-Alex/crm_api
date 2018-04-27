Rails.application.routes.draw do
  root to: 'leads#index'

  devise_for :admins

  resources :leads do 
    collection do
      get :auto_text
    end
  end


  get '/next' => 'leads#next'
  get '/no_leads' => 'leads#no_leads'
  get '/token' => 'leads#token'
  post '/voice' => 'leads#voice'
  post '/text' => 'leads#text'
  post '/autotext' => 'leads#autotext'

  get '/daily_logs' => 'daily_progress_logs#index'

  post '/incoming_voice' => 'webhooks#incoming_voice'
  post '/incoming_text' => 'webhooks#incoming_text'

  namespace :api do
    namespace :v1 do
      get '/leads' => 'leads#index'
      get '/leads/:id' => 'leads#show'
      post '/leads' => 'leads#create'
    end
  end

end
