class ChangeDataTypeForPhoneNumber < ActiveRecord::Migration[6.1]
  def change
    change_column :shops, :phone_number, :string
  end
end
