
@batches.each do |batch|
  json.set! batch.id do
    json.partial! 'batch', batch: batch
  end
end
