json.extract! @user, :id, :username, :zip_code, :img_url, :first_name, :last_name, :batches
json.order_details @order_details
json.batch_details @batch_details
