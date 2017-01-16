# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
user1 = User.create!({first_name: 'Tsuiyung', last_name: 'Lau', username: 'Grandma Lau', password: '123456', zip_code:'94805', img_url:'http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_100,w_100/v1484343810/grandma-lau.jpg'});
user2 = User.create!({first_name: 'Bruce', last_name: 'Lee', username: 'Bruce Lee', password: '123456', zip_code:'98105', img_url:'http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_100,w_100/v1484344036/Bruce_Lee_1973_l0gfnl.jpg'});
user3 = User.create!({first_name: 'Ken', last_name:'Miyagi', username: 'Mr. Miyagi', password: '123456', zip_code:'94801', img_url:'http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_100,w_100/v1484344090/mr_miyagi_tdvrh8.png'})
user4 = User.create!({first_name: 'Janice', last_name:'Kim', username: 'Mrs. Kim', password: '123456', zip_code:'94110', img_url:'http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_245,w_245/v1484588179/korean_grandma_rn6mrt.jpg'})
user5 = User.create!({first_name: 'Visrin', last_name:'Sadavit', username: 'ThaiMa', password: '123456', zip_code:'94112', img_url:'http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_561,w_561/v1484588025/thai_grandma_jjfhoc.jpg'})






batch1 = Batch.create!({title: 'Dumplings',
  category: "Chinese",
  description: "Yummy vegetarian dumplings",
  goal: 30,
  zip_code: 94805,
  chef_id: user1.id })

batch2 = Batch.create!({title: 'Steamed Buns',
  category: "Cantonese",
  description: "Steamed Red Bean Buns",
  goal: 25,
  zip_code: 94804,
  chef_id: user3.id })

batch_zongzi = Batch.create!({title: 'Zongzi',
  category: "Chinese",
  description: "Glutinous Rice with pork, salty egg,
  chestnuts, peanuts, and mushrooms in bamboo leaf. Microwave for 3 minutes before eating.",
  goal: 10,
  zip_code: 94805,
  chef_id: user1.id })

batch_korean_pancakes = Batch.create!({title: 'Korean Scallion Pancakes',
  category: "Korean",
  description: "Rice flour, green onions, fried into scallion pancakes. Can be reheated on
  stove or griddle or in microwave.",
  goal: 20,
  zip_code: 94111,
  chef_id: user4.id })

batch_khanom = Batch.create!({title: 'Khanom Krog',
  category: "Korean",
  description: "Fried mini coconut patties cooked in special pan. Crispy
  edges and delcious filling of various flavors, including green onions, corn,
  yam, and plain.",
  goal: 20,
  zip_code: 94112,
  chef_id: user4.id })

batch_scallion = Batch.create!({title: 'Scallion Pancakes',
  category: "Taiwanese",
  description: "One of my favorite foods to make. Layered pancake with flaky dough
  and green onions throughout. Can be fried on the pan or toasted in the oven. Comes frozen.",
  goal: 15,
  zip_code: 94804,
  chef_id: user1.id })

batch_curry_puffs = Batch.create!({title: 'Curry Puffs',
  category: "Cantonese",
  description: "Flaky pastry with pork and potatoes in a curry sauce inside. Can be toasted
  or eaten cold as a filling snack or a light lunch. A Hong Kong specialty!",
  goal: 30,
  zip_code: 98105,
  chef_id: user3.id })



  image1 = BatchImage.create!(
  {url:'http://res.cloudinary.com/indiemomo/image/upload/c_scale,h_300,w_480/v1484332117/dumplings_noxqey.jpg', batch_id: batch1.id})
  image2 = BatchImage.create!(
  {url:'http://res.cloudinary.com/indiemomo/image/upload/c_crop,g_face,h_300,w_480/v1484332115/baozi_wqgv9p.jpg', batch_id: batch2.id})
  image_zongzi = BatchImage.create!(
  {url:'http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484588442/18568508691_8e68a14dfb_k_din14r.jpg', batch_id: batch_zongzi.id})
  image_scallion = BatchImage.create!(
  {url:'http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484588437/scallion_pancakes.jpg', batch_id: batch_scallion.id})
  image_khanom = BatchImage.create!(
  {url:'http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484588437/14436230543_159b01aeff_o_saodir.jpg', batch_id: batch_khanom.id})
  image_korean = BatchImage.create!(
  {url:'http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484588796/korean-green-onion-pancake_ruzw1u.jpg', batch_id: batch_korean_pancakes.id})
  image_curry_puffs = BatchImage.create!(
  {url:'http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484588795/12-spiral-skin-curry-puffs-1_njhk0z.jpg', batch_id: batch_curry_puffs.id})




  orderoption1 = OrderOption.create!({cost:5, qty: 5, description: "Five delicious dumplings", batch_id: batch1.id})
  orderoption2 = OrderOption.create!({cost:10, qty: 12, description: "Twelve delicious dumplings", batch_id: batch1.id})
  orderoption3 = OrderOption.create!({cost:3, qty: 1, description: "One yummy bun", batch_id: batch2.id})
  orderoption4 = OrderOption.create!({cost:6, qty: 3, description: "So many buns", batch_id: batch2.id})
  # zongzi_option1
  # zongzi_option2

  korean_pancakes_option1 = OrderOption.create!({cost: 4, qty: 1, description: "One order of scallion pancakes", batch_id: batch_korean_pancakes.id})
  korean_pancakes_option2 = OrderOption.create!({cost:7, qty: 2, description: "Delivery included", batch_id: batch_korean_pancakes.id})
  khanom_option1 = OrderOption.create!({cost:5, qty: 1, description: "One order of khanom krog", batch_id: batch_khanom.id})
  khanom_option2 = OrderOption.create!({cost:10, qty: 2, description: "Two orders of khanom krog", batch_id: batch_khanom.id})
  khanom_option3 = OrderOption.create!({cost:15, qty: 4, description: "Four orders of khanom krog", batch_id: batch_khanom.id})
  scallion_option1 = OrderOption.create!({cost:5, qty: 5, description: "Five scallion pancakes", batch_id: batch_scallion.id})
  scallion_option2 = OrderOption.create!({cost:10, qty: 10, description: "Ten delicious scallion pancakes plus free delivery!", batch_id: batch_scallion.id})
  curry_puffs_option1 = OrderOption.create!({cost:3, qty: 2, description: "Two flaky curry puffs", batch_id: batch_curry_puffs.id})
  curry_puffs_option2 = OrderOption.create!({cost:5, qty: 4, description: "Discount when you buy 4", batch_id: batch_curry_puffs.id})
  curry_puffs_option3 = OrderOption.create!({cost:10, qty: 10, description: "Discount when you buy 10", batch_id: batch_curry_puffs.id})
