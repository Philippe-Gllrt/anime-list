class AnimesController < ApplicationController
  def index
    @anime = Anime.all
  end

  def show
    @anime = Anime.find(params[:id])
  end

  def create
    @anime = Anime.new(anime_params)
    puts "-------------- anime params -----------------"
    puts @anime
    puts "------------------user ------------------"
    puts current_user
    puts User.first.id
    @anime.user_id = User.first.id
    if params[:q8].present?
      cloudinary_upload = Cloudinary::Uploader.upload(params[:q8])
      @anime.image_url = cloudinary_upload['secure_url']
    end
    @anime.save!
    redirect_to animes_path
  end

  def new
    @anime = Anime.new
  end

  private

  def anime_params
    params.require(:anime).permit(:title, :synopsis, :link, :season, :comment, :rate_animation, :rate_synopsis )
  end
end
