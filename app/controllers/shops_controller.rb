class ShopsController < ApplicationController
    def index 
        shops = Shop.all
        render json: shops
    end
end
