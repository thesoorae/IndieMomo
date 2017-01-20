class Api::ReviewsController < ApplicationController

def create
  @review = Review.new(review_params)
  @review.batch_id = params[:batch_id]
  @review.user_id = current_user.id
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages
    end
end

def destroy
  @review = Review.find(params[:id])
  @review.destroy
  render json: @review
end

def review_params
  params.require(:review).permit(:rating, :review_text)
end

end
