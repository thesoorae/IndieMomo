class Api::UsersController < ApplicationController


  def index
    @users = User.all
    render :index
  end


	def create
		@user = User.new(user_params)

		if @user.save
			login(@user)
			render "api/users/show"
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

	def show
		@user = User.find(params[:id])
    @order_details = []
		if @user
      @user.order_options.each do |order|
          @order_details.push({qty: order.qty, cost: order.cost, main_image: order.batch.main_image, batch_id: order.batch.id, order_id: order.id})
      end
  			render :show
		else
			render json: @user.errors.full_messages, status:422
		end
	end


	def update
		@user = User.find(params[:id]) if params[:id] === current_user.id
		if @user && @user.update(user_params)
			render :show
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

	private

	def user_params
		params.require(:user).permit(:username, :password, :first_name, :last_name, :img_url, :zip_code)
	end

end
