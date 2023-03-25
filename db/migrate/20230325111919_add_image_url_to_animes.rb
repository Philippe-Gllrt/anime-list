class AddImageUrlToAnimes < ActiveRecord::Migration[7.0]
  def change
    add_column :animes, :image_url, :string
  end
end
