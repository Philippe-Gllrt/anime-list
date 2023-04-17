class RemoveCommentFromAnimes < ActiveRecord::Migration[7.0]
  def change
    remove_column :animes, :comment, :string
  end
end
