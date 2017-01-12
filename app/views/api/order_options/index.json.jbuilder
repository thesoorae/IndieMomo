
@order_options.each do |option|
  json.set! option.id do
    json.partial! 'option', option: option
  end
end
