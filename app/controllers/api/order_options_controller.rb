class Api::OrderOptionsController < ApplicationController
  before_action :require_owner
  attr_reader :current_batch

  def current_batch
    @current_batch || Batch.find(params[:batchId])
  end

  def require_owner
    render json: {base: ['Please only edit your own batches']}, status: 401 unless current_user.id == @current_batch.chef_id
  end

  def create
    @order_option = OrderOption.new(option_params)
    @order_option.batch_id = @current_batch.id
    if @order_option.save
      render :index
    else
      render json: @order_option.errors.full_messages, status:422
    end
  end

  def update
    @order_option = OrderOption.find(params[:id])
    if @order_option.update(options_params)
  end

  def index
    @order_options = OrderOption.find_by(batch_id: @current_batch.id)
    render :index
  end

  def destroy
  end

  def options_params
    params.require(:order_options).permit(:cost, :qty, :description)
  end
end
