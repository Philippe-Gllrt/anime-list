class Anime < ApplicationRecord
  belongs_to :user
  has_one_attached :picture

  validates_presence_of :title, :synopsis, :picture, :rate_animation, :rate_synopsis, :season
end
