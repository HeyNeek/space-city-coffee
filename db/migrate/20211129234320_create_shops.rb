class CreateShops < ActiveRecord::Migration[6.1]
  def change
    create_table :shops do |t|
      t.string :name
      t.integer :phone_number
      t.string :address
      t.string :location_link

      t.timestamps
    end
  end
end
