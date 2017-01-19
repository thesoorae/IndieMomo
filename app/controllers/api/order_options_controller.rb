class Api::OrderOptionsController < ApplicationController
  before_action :require_owner, only: [:create, :update, :destroy]
  attr_reader :current_batch

  def current_batch
    @current_batch ||= Batch.find(params[:batch_id])
  end

  def require_owner
    unless current_user.id == current_batch.chef_id
      render json: {errors: ['Please only edit your own batches']}, status: 401
    end
  end

  def create

    @order_option = OrderOption.new(option_params)
    if @order_option.save
      render :show
    else
      render json: @order_option.errors.full_messages, status:422
    end
  end

  def update
    @order_option = OrderOption.find(params[:id])

  end

  def index
    @order_options = OrderOption.find_by(batch_id: @current_batch.id)
    render :index
  end

  def destroy
    @order_option = OrderOption.find(params[:id])
    @order_option.destroy
    render json: @order_option

  end

  def option_params
    params.require(:order_option).permit(:cost, :qty, :description, :batch_id)
  end

end
