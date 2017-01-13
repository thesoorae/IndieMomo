# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
user1 = User.create!({username: 'Grandma Lau', password: '123456', zip_code:'94805', img_url:'grandma.jpg'});
user2 = User.create!({username: 'Bruce Lee', password: '123456', zip_code:'94804', img_url:'bruce.jpg'});
user3 = User.create!({username: 'Mr. Miyagi', password: '123456', zip_code:'94801', img_url:'miyagi.jpg'})

batch1 = Batch.create!({title: 'Dumplings',
  category: "Chinese",
  description: "Yummy vegetarian dumplings",
  goal: 30,
  zip_code: 94805,
  qty_in_order: 5,
  chef_id: user1.id })

batch2 = Batch.create!({title: 'Steamed Buns',
  category: "Cantonese",
  description: "Steamed Red Bean Buns",
  goal: 25,
  zip_code: 94804,
  qty_in_order: "1 piece",
  chef_id: user3.id })

  image1 = BatchImage.create!({url:'http://res.cloudinary.com/indiemomo/image/upload/c_scale,h_300,w_480/v1484332117/dumplings_noxqey.jpg', batch_id: batch1.id})
  image2 = BatchImage.create!({url:'http://res.cloudinary.com/indiemomo/image/upload/c_crop,g_face,h_300,w_480/v1484332115/baozi_wqgv9p.jpg', batch_id: batch2.id})

  orderoption1 = OrderOption.create!({cost:5, qty: 5, description: "Five delicious dumplings", batch_id: batch1.id})
  orderoption2 = OrderOption.create!({cost:10, qty: 12, description: "Twelve delicious dumplings", batch_id: batch1.id})
  orderoption1 = OrderOption.create!({cost:3, qty: 1, description: "One yummy bun", batch_id: batch2.id})
  orderoption1 = OrderOption.create!({cost:6, qty: 3, description: "So many buns", batch_id: batch2.id})
