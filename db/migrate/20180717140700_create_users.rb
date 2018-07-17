class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.boolean :admin
      t.string :current_city
      t.string :fav_city
      t.text :bio

      t.timestamps
    end
  end
end
