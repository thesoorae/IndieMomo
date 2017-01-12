
@order_options.each do |option|
  json.set! option.id do
    json.partial! 'batch', batch: batch
  end
end
