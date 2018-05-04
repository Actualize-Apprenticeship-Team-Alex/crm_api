class CreateOutreaches < ActiveRecord::Migration[5.0]
  def change
    create_table :outreaches do |t|
      t.string :latest_outreach

      t.timestamps
    end
  end
end
