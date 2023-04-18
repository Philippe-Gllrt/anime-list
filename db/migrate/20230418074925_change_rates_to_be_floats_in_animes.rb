class ChangeRatesToBeFloatsInAnimes < ActiveRecord::Migration[7.0]
  def change
    change_column :animes, :rate_animation, :float
    change_column :animes, :rate_synopsis, :float
  end
end
