class AddLeadIdToOutreach < ActiveRecord::Migration[5.0]
  def change
    add_column :outreaches, :lead_id, :integer
  end
end
