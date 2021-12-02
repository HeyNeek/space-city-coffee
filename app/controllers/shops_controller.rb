class ShopsController < ApplicationController
    skip_before_action :authorize
    
    def index 
        shops = Shop.all
        render json: shops
    end
end
