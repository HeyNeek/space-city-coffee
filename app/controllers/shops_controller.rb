class ShopsController < ApplicationController
    skip_before_action :authorize
    
    def index 
        shops = Shop.all
        render json: shops
    end

    def show
        shop = Shop.find(params[:id])
        render json: shop
    end
end
