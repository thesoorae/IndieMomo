class Api::BatchesController < ApplicationController
  before_action :require_logged_in

  def index
    @batches = Batch.all
    render :index
  end

  def show
    @batch = Batch.find(params[:id])
  end

  def create
    @batch = Batch.new(batch_params)
    if @batch.save
      render :show
    else
      render json: @batch.errors.full_messages, status:422
    end
  end

  def update
    @batch = current_user.batches.find(params[:id])
    if @batch.update(batch_params)
      render :show
    else
      render json: @batch.errors.full_messages, status:422
    end
  end


  def destroy
    @batch = current_user.batches.find(params[:id])
    @batch.destroy
    render json: @batch
  end

  def batch_params
    params.require(:batch).permit(
    :title,
    :category,
    :description,
    :goal,
    :zip_code,
    :order_description,
    :chef_id,
    :active

    )
  end
end
