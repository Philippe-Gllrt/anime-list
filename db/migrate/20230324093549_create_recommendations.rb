class CreateRecommendations < ActiveRecord::Migration[7.0]
  def change
    create_table :recommendations do |t|
      t.string :title
      t.string :comment

      t.timestamps
    end
  end
end
