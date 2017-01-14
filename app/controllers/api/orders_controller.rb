class Api::OrdersController < ApplicationController

  def create
    @order = Order.new(order_params)
    if @order.save
      render :show
    else
      render json: @order.errors.full_messages, status:422
    end
  end

  def destroy
  end

  def order_params
    params.require(:order).permit(:order_option_id, :customer_id)
  end

end
