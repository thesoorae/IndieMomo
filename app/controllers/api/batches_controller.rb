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
      self.createOptions
      render :show
    else
      render json: @batch.errors.full_messages, status:422
    end
  end



  def update
    @batch = current_user.batches.find(params[:id])
    if @batch.update(batch_params)
      self.updateOptions
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




def createOptions
  OrderOption.create({batch_id: @batch.id, cost:0, qty:0, description: "A great order!"})
  OrderOption.create({batch_id: @batch.id, cost:0, qty:0, description: "A great order!"})
  OrderOption.create({batch_id: @batch.id, cost:0, qty:0, description: "A great order!"})
end

def updateOptions
  options = params[:order_options]
  options.each do |option|
    order_option = OrderOption.find(option.id)
    order_option.update(option)
  end
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
    :active,
    :order_options

    )
  end
end
