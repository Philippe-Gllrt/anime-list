class RecommendationsController < ApplicationController
  def index
    @recommendation = Recommendation.all.sort_by{ |k | k['title'] }
  end

  def create
    @recommendation = Recommendation.new(recommendation_params)
    if @recommendation.save
      redirect_to animes_path
    else
      render 'new'
    end
  end

  def show
    @recommendation = Recommendation.find(params[:id])
  end

  def new
    @recommendation = Recommendation.new
  end

  private

  def recommendation_params
    params.permit(:title, :comment)
  end
end
