class AnimesController < ApplicationController
  skip_before_action :verify_authenticity_token
  include Pundit

  def index
    @anime = Anime.all.sort_by{ |k | k['title'] }
    # authorize @anime
  end

  def show
    @anime = Anime.find(params[:id])
    authorize @anime
  end

  def create
    @anime = Anime.new(anime_params)
    @anime.user_id = User.first.id
    if params[:picture].present?
      cloudinary_upload = Cloudinary::Uploader.upload(params[:picture])
      @anime.image_url = cloudinary_upload['secure_url']
    end
    if @anime.save
      redirect_to animes_path
    else
      render 'new'
    end
    authorize @anime
  end

  def new
    @anime = Anime.new
    authorize @anime
  end

  private

  def anime_params
    params.permit(:title, :synopsis, :season, :rate_animation, :rate_synopsis, :picture)
  end
end
