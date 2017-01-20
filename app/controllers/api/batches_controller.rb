class Api::BatchesController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index

    @batches = Batch.all
    render :index
  end

  def search
    @batches = Batch.where("LOWER(title) LIKE LOWER(:title) ", {:title => params[:title]})
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
      self.updateImages if params[:images]
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
  OrderOption.create({batch_id: @batch.id, cost:1, qty:1, description: "A great order!"})
end


def updateImages
  images = params[:images]
  images.each do |k, image|

    a= BatchImage.create({batch_id:@batch.id, url: image[:url]}) unless image.has_key?(:id)
    p a
  end
  @batch.batch_images.each do |batch_image|
    unless images.any?{|k, v| v[:url] == batch_image.url}
      p "DESTROYYYY"
      batch_image.destroy
    end
  end
  @batch.reload
end

def updateOptions
options = params[:batch][:order_options]

  options.each do |k, option|
    order_option = OrderOption.find(option['id'])
    order_option.update({cost: option[:cost], qty: option[:qty], description: option[:description]})
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
    :active    )
  end
end
