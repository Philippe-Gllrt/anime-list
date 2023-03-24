class AnimesController < ApplicationController
  def index
    @anime = Anime.all
  end

  def show
    @anime = Anime.find(params[:id])
  end

  def create
    @anime = Anime.new(params[:restaurant])
    @anime.save!
  end

  def new
    @anime = Anime.new
  end

  private

  def anime_params
    params.require(:anime).permit(:title, :synopsis, :link, :season, :comment, :rate_animation, :rate_synopsis )
  end
end
