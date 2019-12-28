ActiveAdmin.register Video do
    permit_params :title, :content, :url, :active
  
    index do
      selectable_column
      id_column
      column :title
      column :content
      column :url
      column :active
      actions
    end
  
  end
  