class RecommendationsController < ApplicationController
  include Pundit

  def index
    @recommendation = Recommendation.all.sort_by{ |k | k['title'] }
  end

  def create
    @recommendation = Recommendation.new(recommendation_params)
    authorize @recommendation
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
    authorize @recommendation
  end

  private

  def recommendation_params
    params.permit(:title, :comment)
  end
end
