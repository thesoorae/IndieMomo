class Api::BatchImagesController < ApplicationController

  def create
    @image = BatchImage.new(image_params)
    @image.batch_id = params[:batch_id]
    if @image.save
      render :show
    else
      render json: @image.errors.full_messages, status:422
    end
  end

  def destroy
    @image = BatchImage.find(params[:id])
    @image.destroy
    render json: @image
  end

  def index
    @images = BatchImage.where(batch_id: params[:batch_id])
    render :index
  end

  def image_params
    params.require(:image).permit(:url)
  end

end
