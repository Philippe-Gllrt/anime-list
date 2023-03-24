class CreateAnimes < ActiveRecord::Migration[7.0]
  def change
    create_table :animes do |t|
      t.string :title
      t.integer :season
      t.string :synopsis
      t.string :comment
      t.string :link
      t.integer :rate_synopsis
      t.integer :rate_animation
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
