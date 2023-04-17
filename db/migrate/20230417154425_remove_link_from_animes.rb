class RemoveLinkFromAnimes < ActiveRecord::Migration[7.0]
  def change
    remove_column :animes, :link, :string
  end
end
