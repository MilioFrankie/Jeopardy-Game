class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :question
      t.string :user_answer
      t.string :correct_answer
      t.belongs_to :category, foreign_key: true

      t.timestamps
    end
  end
end
