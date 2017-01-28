# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago'  },, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
user1 = User.create!({first_name: 'Tsuiyung', last_name: 'Lau', username: 'Grandma Lau', password: '123456', zip_code:'94805',
  img_url:'http://res.cloudinary.com/indiemomo/image/upload/v1484343810/grandma-lau.jpg'})
user2 = User.create!({first_name: 'Bruce', last_name: 'Lee', username: 'Bruce Lee', password: '123456', zip_code:'98105',
  img_url:'http://res.cloudinary.com/indiemomo/image/upload/v1484344036/Bruce_Lee_1973_l0gfnl.jpg'});
user3 = User.create!({first_name: 'Ken', last_name:'Miyagi', username: 'Mr. Miyagi', password: '123456', zip_code:'94801',
  img_url:'http://res.cloudinary.com/indiemomo/image/upload/c_fill,g_west,h_300,w_300/v1484344090/mr_miyagi_tdvrh8.png'})
user4 = User.create!({first_name: 'Janice', last_name:'Kim', username: 'Mrs. Kim', password: '123456', zip_code:'94110',
  img_url:'http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_245,w_245/v1484588179/korean_grandma_rn6mrt.jpg'})
user5 = User.create!({first_name: 'Visrin', last_name:'Sadavit', username: 'ThaiMa', password: '123456', zip_code:'94112',
  img_url:'http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_561,w_561/v1484588025/thai_grandma_jjfhoc.jpg'})

filip = User.create!({
   "first_name" => "Angelica",
   "last_name" => "Santos",
   "username" => "angelica_santos",
   "password" => 123456,
   "zip_code" => 98121,
   "img_url" => "http://res.cloudinary.com/indiemomo/image/upload/c_scale,w_180/v1484933400/users/8196186971_2237f161bd_b.jpg"
   }
   )
 chinese = User.create!({
   "first_name" => "Linda",
   "last_name" => "Lam ",
   "username" => "mrs_lam",
   "password" => 123456,
   "zip_code" => 98105,
   "img_url" => "http://res.cloudinary.com/indiemomo/image/upload/v1484935372/users/Grandma.jpg"
 }
 )
 cantonese =  User.create!({
   "first_name" => "Albert ",
   "last_name" => "Lee",
   "username" => "grandpa_lee",
   "password" => 123456,
   "zip_code" => 98148,
   "img_url" => "http://res.cloudinary.com/indiemomo/image/upload/v1484933799/users/lee.jpg"
 }
 )
 korean = User.create!({
   "first_name" => "David",
   "last_name" => "Kim ",
   "username" => "mr_kim",
   "password" => 123456,
   "zip_code" => 98112,
   "img_url" => "http://res.cloudinary.com/indiemomo/image/upload/c_scale,w_400/v1484933705/users/2256463549_a0d51b3a30_b.jpg"
 }
 )
 vietnam = User.create!({
   "first_name" => "Kim",
   "last_name" => "Nguyen ",
   "username" => "kim_nguyen",
   "password" => 123456,
   "zip_code" => 98105,
   "img_url" => "http://res.cloudinary.com/indiemomo/image/upload/c_scale,w_300/v1484935209/users/dam-cuoi_8.jpg"
 }
)

 japanese =  User.create!({
   "first_name" => "Hiro",
   "last_name" => "Fujiwara",
   "username" => "fujiwara",
   "password" => 123456,
   "zip_code" => 98405,
   "img_url" => "http://res.cloudinary.com/indiemomo/image/upload/v1484933847/users/bfefa2e13ce90a922063364ec387303c_japan-300x300_gallery.jpg"
 }
 )
 taiwanese = User.create!({
   "first_name" => "Martin ",
   "last_name" => "Chan",
   "username" => "martin_chan",
   "password" => 123456,
   "zip_code" => 98112,
   "img_url" => "http://res.cloudinary.com/indiemomo/image/upload/v1484935614/users/cantonese_dinner_walter_grandpa.jpg"
 }
)

 taiwanese2 =  User.create!({
   "first_name" => "Emily",
   "last_name" => "Tsu",
   "username" => "grandma_tsu",
   "password" => 123456,
   "zip_code" => 98105,
   "img_url" => "http://res.cloudinary.com/indiemomo/image/upload/c_scale,w_400/v1484933408/batch_photos/users/elderly-Chinese-2.3-CPR.jpg"
 }
)

 cantonese2 = User.create!({
   "first_name" => "Chung",
   "last_name" => "Kee",
   "username" => "grandpa_chung",
   "password" => 123456,
   "zip_code" => 94805,
   "img_url" => "http://res.cloudinary.com/indiemomo/image/upload/v1484935533/users/Taiwan-2014-308.jpg"
 }
)
batch2 = Batch.create!({title: 'Steamed Buns',
  category: "Cantonese",
  description: "Steamed Red Bean Buns",
  goal: 25,
  zip_code: 94804,
  long_description: "large, hand-size buns with minced pork filling. Can also be made vegetarian upon request.",
  chef_id: user2.id })

pzongzi =  Batch.create!({
  "title" => "Pork Zongzi ",
  "description" => "Made with pork, salted egg yolk, shittake mushrooms, and chestnuts ",
  "long_description" => "Boil for 5 minutes or steam. Can also be microwaved on high for 3 minutes. Freeze after receiving. ",
  "zip_code" => cantonese2.zip_code,
  "goal" => 10,
  "category" => "Chinese",
  "chef_id" => cantonese2.id
}
)
lumpia =  Batch.create!({
  "title" => "Lumpia ",
  "description" => "Homemade lumpia, like spring rolls. Fry in oil or microwave. ",
  "long_description" => "Lumpia is a spring roll of Chinese origin commonly found in Indonesia and the Philippines. It is a savoury snack made of thin crepe pastry skin and savory filling.",
  "zip_code" => filip.zip_code,
  "goal" => 30,
  "category" => "Filipino",
  "chef_id" => filip.id
}
)

tea = Batch.create!({
  "title" => "Tea Eggs ",
  "description" => "These tea eggs are stewed for over 24 hours in my secret recipe of spices. ",
  "long_description" => "Tea egg is a typical Chinese savory food commonly sold as a snack, in which a boiled egg is cracked and then boiled again in tea, sauce and/or spices. ",
  "zip_code" => taiwanese.zip_code,
  "goal" => 30,
  "category" => "Taiwanese",
  "chef_id" => taiwanese.id
}
)
youtiao =  Batch.create!({
  "title" => "Youtiao",
  "description" => "Oil stick, or fried cruller, goes great with congee. ",
  "long_description" => "Reheat in toaster for best results. ",
  "zip_code" => cantonese.zip_code,
  "goal" => 15,
  "category" => "Cantonese",
  "chef_id" => cantonese.id
}
)



 gamjajeon =  Batch.create!({
    "title" => "Gamjajeon ",
    "description" => "Korean potato pancake, refrigerated. Just fry and serve!",
    "long_description" => "Gamjajeon is a variety of jeon, or Korean style pancake, made by pan-frying finely grated potato on a frying pan with any type of vegetable oil until golden brown.",
    "zip_code" => korean.zip_code,
    "goal" => 30,
    "category" => "Korean",
    "chef_id" => korean.id
  }
  )
  lotus = Batch.create!({
    "title" => "Lotus Paste Moon Cake ",
    "description" => "Hand made moon cakes with lotus bean paste and salted egg yolk inside.",
    "long_description" => "A mooncakeis a Chinese bakery product traditionally eaten during the Mid-Autumn Festival (Zhongqiujie). The festival is for lunar appreciation and moon watching, when mooncakes are regarded as an indispensable delicacy. ",
    "zip_code" => cantonese.zip_code,
    "goal" => 25,
    "category" => "Cantonese",
    "chef_id" => cantonese.id
  }
)

  redbean =  Batch.create!({
    "title" => "Red Bean Moon Cake",
    "description" => "A family recipe. Great for Chinese New Year. ",
    "long_description" => "A mooncakeis a Chinese bakery product traditionally eaten during the Mid-Autumn Festival (Zhongqiujie). The festival is for lunar appreciation and moon watching, when mooncakes are regarded as an indispensable delicacy. ",
    "zip_code" => cantonese.zip_code,
    "goal" => 25,
    "category" => "Cantonese",
    "chef_id" => cantonese.id
  }
  )
  mochi =  Batch.create!({
    "title" => "Mochi ",
    "description" => "Soft delicious mochi made in 3 flavors red bean, green tea, and sesame. ",
    "long_description" => "Mochi is Japanese rice cake made of mochigome, a short-grain japonica glutinous rice. The rice is pounded into paste and molded into the desired shape. In Japan it is traditionally made in a ceremony called mochitsuki.",
    "zip_code" => japanese.zip_code,
    "goal" => 22,
    "category" => "Japanese",
    "chef_id" => japanese.id
  }
)

  radish = Batch.create!({
    "title" => "Radish Cake ",
    "description" => "Fry in hot oil before serving. Can be frozen. ",
    "long_description" => "Made with daikon radish, this is a steamed rice flour cake with shrimp, pork, and garlic. Turnip cake is a Chinese dim sum dish made of shredded radish and plain rice flour. The less commonly used radish cake is a more accurate name",
    "zip_code" => taiwanese.zip_code,
    "goal" => 40,
    "category" => "Taiwanese",
    "chef_id" => taiwanese.id
  }
)


  spring = Batch.create!({
    "title" => "Spring Rolls ",
    "description" => "Crispy pork and cabbage spring rolls, frozen. ",
    "long_description" => "Spring rolls are a large variety of filled, rolled appetizers or dim sum found in East Asian and Southeast Asian cuisine. The name is a literal translation of the Chinese chūn juǎn.",
    "zip_code" => chinese.zip_code,
    "goal" => 100,
    "category" => "Chinese",
    "chef_id" => chinese.id
  }
)

  vietnamesespring =  Batch.create!({
    "title" => "Vietnamese Spring Rolls ",
    "description" => "Also comes with dipping sauce. ",
    "long_description" => "Light and summery, I make these spring rolls with cilantro, mint, cucumber, and fried tofu.",
    "zip_code" => vietnam.zip_code,
    "goal" => 30,
    "category" => "Vietnamese",
    "chef_id" => vietnam.id
  }
  )
  avocado =  Batch.create!({
    "title" => "Avocado Sushi Rolls",
    "description" => "Handmade avocado sushi rolls. One piece contains about five slices. ",
    "long_description" => "",
    "zip_code" => japanese.zip_code,
    "goal" => 25,
    "category" => "Japanese",
    "chef_id" => japanese.id
  }
)


  summer = Batch.create!({
    "title" => "Summer Rolls ",
    "description" => "Comes with peanut dipping sauce. ",
    "long_description" => "Made with lettuce, shrimp, and basil. Also known as vietnamese spring rolls. Goi cuon, Vietnamese spring roll, is a Vietnamese dish traditionally consisting of pork, prawn, vegetables, bún, and other ingredients wrapped in Vietnamese bánh tráng.",
    "zip_code" => vietnam.zip_code,
    "goal" => 15,
    "category" => "Vietnamese",
    "chef_id" => vietnam.id
  }
)

  coconut =  Batch.create!({
    "title" => "Coconut Jelly ",
    "description" => "One order comes with one 16 oz container.",
    "long_description" => "Delicious, light, refreshing, sweet coconut jelly. Of japanese or Chinese origin, popular in Hawaii. Made with coconut milk and agar. ",
    "zip_code" => chinese.zip_code,
    "goal" => 30,
    "category" => "Chinese",
    "chef_id" => chinese.id
  }
  )
  sun =  Batch.create!({
    "title" => "Sun Cake ",
    "description" => "Flaky light homemade taiwanese pastry. ",
    "long_description" => "A suncake, or taiyang bing, is a popular Taiwanese dessert originally from the city of Taichung, Taiwan. The typical fillings consist of maltose",
    "zip_code" => taiwanese.zip_code,
    "goal" => 25,
    "category" => "Taiwanese",
    "chef_id" => taiwanese.id
  }
)

  bawan =  Batch.create!({
    "title" => "Bawan ",
    "description" => "Meat filled rice flour steamed dumpling. ",
    "long_description" => "Comes with red sauce and cilantro. Ba-wan is a large-sized Taiwanese dumpling and street food, consisting of a 6–8 cm diameter disk-shaped translucent dough filled with a savory stuffing and served with a sweet and savory sauce.",
    "zip_code" => taiwanese.zip_code,
    "goal" => 25,
    "category" => "Taiwanese",
    "chef_id" => taiwanese.id
  }
  )
  eggplant =  Batch.create!({
    "title" => "Eggplant Gyoza ",
    "description" => "Miso, ginger, and sesame flavored eggplant in these light and delicious gyoza. ",
    "long_description" => "Fry in oil with some water to steam. Can be frozen. ",
    "zip_code" => japanese.zip_code,
    "goal" => 15,
    "category" => "Japanese",
    "chef_id" => japanese.id
  }
)

  pork =  Batch.create!({
    "title" => "Pork Mushroom Dumplings",
    "description" => "Family recipe of pork and mushroom dumplings. Comes frozen. ",
    "long_description" => "Can be steamed, boiled, or pan fried for pot stickers. ",
    "zip_code" => chinese.zip_code,
    "goal" => 30,
    "category" => "Chinese",
    "chef_id" => chinese.id
  }
)

  chive = Batch.create!({
    "title" => "Chive Box ",
    "description" => "Comes frozen, can be microwaved, toasted, or pan fried. ",
    "long_description" => "Chive, clear bean noodle, and egg inside of a thick fried pastry. Chinese chive boxes are considered to be one of the many classic street foods that we have in Taiwan.",
    "zip_code" => taiwanese.zip_code,
    "goal" => 20,
    "category" => "Taiwanese",
    "chef_id" => taiwanese.id
  }
)

  wa = Batch.create!({
    "title" => "Wa gui ",
    "description" => "Steam to cook. ",
    "long_description" => "My own recipe of the steamed rice flour with mushroom, pork topping in bowl. Taiwanese specialty of a one-bowl meal. Delicious when steamed. Comes with special soy sauce garlic blend. ",
    "zip_code" => taiwanese2.zip_code,
    "goal" => 20,
    "category" => "Taiwanese",
    "chef_id" => taiwanese2.id
  }
  )
  stinky =  Batch.create!({
    "title" => "Stinky Tofu",
    "description" => "Not for the faint of heart. ",
    "long_description" => "I've perfected this recipe of the popular Taiwanese street food. Comes with cabbage relish. The traditional method of producing stinky tofu is to prepare a brine made from fermented milk, vegetables, and meat the brine can also include dried shrimp, amaranth greens, mustard greens, bamboo shoots, and Chinese herbs. The brine fermentation can take as long as several months.",
    "zip_code" => taiwanese2.zip_code,
    "goal" => 20,
    "category" => "Taiwanese",
    "chef_id" => taiwanese2.id
  }
)

  jap =  Batch.create!({
    "title" => "Jap Chae Noodles",
    "description" => "Try my japchae glass noodles. A great snack or light meal. ",
    "long_description" => "At any gathering it’s hard to pass up these chewy, sweet, and slightly slippery noodles with colorful stir-fried vegetables and mushrooms, its irresistible sesame flavor, healthy amount of garlic, and light, refreshing taste.",
    "zip_code" => korean.zip_code,
    "goal" => 30,
    "category" => "Korean",
    "chef_id" => korean.id
  }
  )
  chicken =  Batch.create!({
    "title" => "Korean Fried Chicken ",
    "description" => "Sweet, sticky, sesame and honey fried chicken wings. ",
    "long_description" => "Korean fried chicken or seasoned chicken is a fried chicken dish prepared in a Korean style. It is consumed as a meal, fast food at bars, or as an after meal snack in Korea. ",
    "zip_code" => korean.zip_code,
    "goal" => 15,
    "category" => "Korean",
    "chef_id" => korean.id
  }
)

  porksung =  Batch.create!({
    "title" => "Pork Sung Buns ",
    "description" => "Rou song mian bao. Comes with mayonnaise and green onions. ",
    "long_description" => "I used to work at a Chinese Cantonese bakery, where I learned this recipe for these buns. ",
    "zip_code" => cantonese2.zip_code,
    "goal" => 15,
    "category" => "Cantonese",
    "chef_id" => cantonese2.id
  }
  )
  pineapple =   Batch.create!({
    "title" => "Pineapple Buns ",
    "description" => "Buo luo bao, no pineapple inside. ",
    "long_description" => "I used to work at a Chinese Cantonese bakery, where I learned this recipe for these buns. ",
    "zip_code" => cantonese2.zip_code,
    "goal" => 15,
    "category" => "Cantonese",
    "chef_id" => cantonese2.id
  }
  )

  congee =  Batch.create!({
    "title" => "Preserved Egg Congee ",
    "description" => "Preserved egg and shredded pork rice porridge. 16 oz. ",
    "long_description" => "Reheat on stove or microwave.  ",
    "zip_code" => cantonese.zip_code,
    "goal" => 15,
    "category" => "Cantonese",
    "chef_id" => cantonese.id
  }
  )
  vzongzi =  Batch.create!({
    "title" => "Vegetarian Zongzi ",
    "description" => "Made with mock duck, shittake mushrooms, chestnuts, and salted egg yolk.",
    "long_description" => "Boil for 5 minutes or steam. Can also be microwaved on high for 3 minutes. Freeze after receiving. ",
    "zip_code" => cantonese2.zip_code,
    "goal" => 20,
    "category" => "Chinese",
    "chef_id" => cantonese2.id
  }
)


  noodles = Batch.create!({
    "title" => "Fresh Ramen Noodles ",
    "description" => "Homemade fresh ramen noodles, keep refrigerated. ",
    "long_description" => "Boil for 1 minute and serve with your favorite broth or stir fry as yakisoba. ",
    "zip_code" => japanese.zip_code,
    "goal" => 18,
    "category" => "Japanese",
    "chef_id" => japanese.id
  }
)

  riceroll =  Batch.create!({
    "title" => "Fresh steamed rice roll ",
    "description" => "Banh cuon, steamed rice rolls with scallions and fried onions. ",
    "long_description" => "Steam or microwave. ",
    "zip_code" => vietnam.zip_code,
    "goal" => 20,
    "category" => "Vietnamese",
    "chef_id" => vietnam.id
  }
)

  puto =  Batch.create!({
    "title" => "Puto Bumbong ",
    "description" => "Coconut and glutinous rice snack. ",
    "long_description" => "",
    "zip_code" => filip.zip_code,
    "goal" => 30,
    "category" => "Filipino",
    "chef_id" => filip.id
  }
)

  pancit =  Batch.create!({
    "title" => "Pancit",
    "description" => "Filipino stir fried noodles. Comes with 1 lb. ",
    "long_description" => "In Filipino cuisine, pancit or pansit are noodles. Noodles were introduced into the Philippines by the Chinese and have since been adopted into local cuisine.",
    "zip_code" => filip.zip_code,
    "goal" => 20,
    "category" => "Filipino",
    "chef_id" => filip.id
  }
)


















batch1 = Batch.create!({title: 'Dumplings',
  category: "Chinese",
  description: "Yummy vegetarian dumplings",
  goal: 30,
  zip_code: 94805,
  long_description: "Family recipe of cabbage, vermicelli, mushrooms, ginger, garlic, and sesame oil. Boil, steam, or pan fry. ",
  chef_id: user3.id })



batch_zongzi = Batch.create!({title: 'Zongzi',
  category: "Chinese",
  description: "Glutinous Rice with pork, salty egg,
  chestnuts, peanuts, and mushrooms in bamboo leaf. Microwave for 3 minutes before eating.",
  goal: 10,
  zip_code: 94805,
  long_description: "Wrapped in bamboo leaf, a wonderful light dinner or snack.",
  chef_id: user1.id })

batch_korean_pancakes = Batch.create!({title: 'Korean Scallion Pancakes',
  category: "Korean",
  description: "Rice flour, green onions, fried into scallion pancakes. Can be reheated on
  stove or griddle or in microwave.",
  goal: 20,
  zip_code: 94111,
  long_description: "Not the same as Chinese scallion pancakes. Lighter and softer. Traditional korean recipe.",
  chef_id: user4.id })

batch_khanom = Batch.create!({title: 'Khanom Krog',
  category: "Thai",
  description: "Fried mini coconut patties cooked in special pan. Crispy
  edges and delcious filling of various flavors, including green onions, corn,
  yam, and plain.",
  goal: 20,
  zip_code: 94112,
  long_description: "",
  chef_id: user5.id })

batch_scallion = Batch.create!({title: 'Scallion Pancakes',
  category: "Taiwanese",
  description: "One of my favorite foods to make. Layered pancake with flaky dough
  and green onions throughout. Can be fried on the pan or toasted in the oven. Comes frozen.",
  goal: 15,
  zip_code: 94804,
  long_description: "",
  chef_id: user1.id })

batch_curry_puffs = Batch.create!({title: 'Curry Puffs',
  category: "Cantonese",
  description: "Flaky pastry with pork and potatoes in a curry sauce inside. Can be toasted
  or eaten cold as a filling snack or a light lunch. A Hong Kong specialty!",
  goal: 30,
  zip_code: 98105,
  long_description: "",
  chef_id: user2.id })



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

  images = BatchImage.create!([
   {
     batch_id: gamjajeon.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934005/batch_photos/gamja-jun-6.jpg"
   },
   {
     batch_id: gamjajeon.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934035/batch_photos/potato-pancake-piece.jpg"
   },
   {
     batch_id: lotus.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934074/batch_photos/8310_1280x800.jpg"
   },
   {
     batch_id: lotus.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934103/batch_photos/Cara-Mudah-Membuat-Moon-Cake-Kering-Nikmat.jpg"
   },
   {
     batch_id: redbean.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484941796/batch_photos/mooncake.jpg"
   },
   {
     batch_id: mochi.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934192/batch_photos/mochi-box3_0.jpg"
   },
   {
     batch_id: mochi.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934205/batch_photos/mochi-for-website2.jpg"
   },
   {
     batch_id: radish.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934219/batch_photos/pan-fried-radish-cake-988x658.jpg"
   },
   {
     batch_id: radish.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934233/batch_photos/6a00d8341ef22f53ef01b7c701ec80970b-500wi.jpg"
   },
   {
     batch_id: tea.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934249/batch_photos/teaeggs.jpg"
   },
   {
     batch_id: spring.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934277/batch_photos/1-Chicken-Spring-Rolls-9-1-of-1.jpg"
   },
   {
     batch_id: spring.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934261/batch_photos/Homemade_Spring_Rolls.jpg"
   },
   {
     batch_id: vietnamesespring.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934300/batch_photos/661622.jpg"
   },
   {
     batch_id: avocado.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934317/batch_photos/avocado-roll.jpg"
   },
   {
     batch_id: lumpia.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934334/batch_photos/Lumpia_276.jpg"
   },
   {
     batch_id: lumpia.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934352/batch_photos/1713216.jpg"
   },
   {
     batch_id: summer.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934363/batch_photos/20140709-vietnamese-shrimp-summer-rolls-joshua-bousel-thumb-1500xauto-407798.jpg"
   },
   {
     batch_id: coconut.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934384/batch_photos/NIK_2883.jpg"
   },
   {
     batch_id: sun.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934402/batch_photos/DSC00713.jpg"
   },
   {
     batch_id: sun.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934424/batch_photos/m203-3.jpg"
   },
   {
     batch_id: bawan.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934439/batch_photos/2012-12-18-10-41-01.jpg"
   },
   {
     batch_id: bawan.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934459/batch_photos/img_2615.jpg"
   },
   {
     batch_id: eggplant.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934478/batch_photos/dsc00788.jpg"
   },
   {
     batch_id: eggplant.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934492/batch_photos/a487279a804a8c6666743a7ee8c0d729.jpg"
   },
   {
     batch_id: pork.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934561/batch_photos/36-duck-with-mushroom-dumpling.w710.h473.2x.jpg"
   },
   {
     batch_id: pork.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934578/batch_photos/20110406-chinese-appetizers-dumplings-16.jpg"
   },
   {
     batch_id: chive.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934596/batch_photos/IMG_1326-1024x768.jpg"
   },
   {
     batch_id: chive.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934614/batch_photos/36a544fcd232a648f48697011fb1b935.jpg"
   },
   {
     batch_id: wa.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934628/batch_photos/6499859529_4e3e962546.jpg"
   },
   {
     batch_id: stinky.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934651/batch_photos/img_2214.jpg"
   },
   {
     batch_id: jap.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934677/batch_photos/japchae-11.jpg"
   },
   {
     batch_id: jap.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934666/batch_photos/Japchae_4271.jpg"
   },
   {
     batch_id: chicken.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934733/batch_photos/plate12.jpg"
   },
   {
     batch_id: chicken.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934747/batch_photos/6a00e55015ee5288330120a9483cb9970b-500wi.jpg"
   },
   {
     batch_id: porksung.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934758/batch_photos/bakery_9_of_68.jpg"
   },
   {
     batch_id: pineapple.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/c_scale,w_900/v1484934772/batch_photos/DSC_0415.jpg"
   },
   {
     batch_id: vzongzi.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934809/batch_photos/2222.jpg"
   },
   {
     batch_id: pzongzi.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_fill,h_300,w_480/v1484934809/batch_photos/zongzi.jpg"
   },
   {
     batch_id: pzongzi.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/v1484934840/batch_photos/zongzi-1.jpg"
   },
   {
     batch_id: congee.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_scale,w_900/v1484934856/batch_photos/maxresdefault.jpg"
   },
   {
     batch_id: youtiao.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/v1484934873/batch_photos/cantoneseyoutiao.jpg"
   },
   {
     batch_id: noodles.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/v1484777884/batch_photos/fxdopqqr4kcliuawkxt8.jpg"
   },
   {
     batch_id: noodles.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/v1484790800/batch_photos/fu5cfawcpyv7c0opn0ur.jpg"
   },
   {
     batch_id: riceroll.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/v1484934926/batch_photos/hanoi_street_food_ban_cuon.jpg"
   },
   {
     batch_id: puto.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/v1484934942/batch_photos/puto_bumbong_1.png"
   },
   {
     batch_id: pancit.id,
     url: "http://res.cloudinary.com/indiemomo/image/upload/c_scale,w_900/v1484934957/batch_photos/4594679346_b28d8eec81_b.jpg"
   }
  ])
















  orderoption1 = OrderOption.create!({cost:5, qty: 5, description: "Five delicious dumplings", batch_id: batch1.id})
  orderoption2 = OrderOption.create!({cost:10, qty: 12, description: "Twelve delicious dumplings", batch_id: batch1.id})
  orderoption3 = OrderOption.create!({cost:3, qty: 1, description: "One yummy bun", batch_id: batch2.id})
  orderoption4 = OrderOption.create!({cost:6, qty: 3, description: "So many buns", batch_id: batch2.id})
  # zongzi_option1
  # zongzi_option2


 order1 = OrderOption.create!({cost: 5,
   qty: 1,
   description: "yum",
   batch_id: gamjajeon.id
 })

   order2 = OrderOption.create!({
   cost: 19,
   qty: 2,
   description: "free delivery",
   batch_id: gamjajeon.id
 })
 order3 = OrderOption.create!({   cost: 20,
   qty: 5,
   description: "",
   batch_id: lotus.id
 })
 order4 = OrderOption.create!({   cost: 30,
   qty: 10,
   description: "free delivery",
   batch_id: lotus.id
 })
 order5 = OrderOption.create!({   cost: 20,
   qty: 5,
   description: "",
   batch_id: redbean.id
 })
 order6 = OrderOption.create!({   cost: 30,
   qty: 10,
   description: "free delivery",
   batch_id: redbean.id
 })
 order7 = OrderOption.create!({   cost: 5,
   qty: 5,
   description: "",
   batch_id: mochi.id
 })
 order8 = OrderOption.create!({   cost: 8,
   qty: 10,
   description: "free delivery",
   batch_id: mochi.id
 })
 order9 = OrderOption.create!({   cost: 6,
   qty: 3,
   description: "",
   batch_id: radish.id
 })
 order10 = OrderOption.create!({
   cost: 10,
   qty: 6,
   description: "free delivery",
   batch_id: radish.id
 })
 order11 = OrderOption.create!({
   cost: 1,
   qty: 3,
   description: "",
   batch_id: tea.id
 })
 order12 = OrderOption.create!({
   cost: 2,
   qty: 5,
   description: "free delivery",
   batch_id: tea.id
 })
 order13 = OrderOption.create!({
   cost: 3,
   qty: 10,
   description: "free delivery",
   batch_id: tea.id
 })
 order14 = OrderOption.create!({
   cost: 15,
   qty: 10,
   description: "",
   batch_id: spring.id
 })

 order15 = OrderOption.create!({
   cost: 25,
   qty: 20,
   description: "free delivery",
   batch_id: spring.id
 })
 order16 = OrderOption.create!({
   cost: 10,
   qty: 4,
   description: "",
   batch_id: vietnamesespring.id
 })
 order17 = OrderOption.create!({
   cost: 20,
   qty: 10,
   description: "free delivery",
   batch_id: vietnamesespring.id
 })
 order18 = OrderOption.create!({
   cost: 7,
   qty: 5,
   description: "",
   batch_id: avocado.id
 })
 order19 = OrderOption.create!({
   cost: 12,
   qty: 10,
   description: "free delivery",
   batch_id: avocado.id
 })
 order20 = OrderOption.create!({
   cost: 5,
   qty: 10,
   description: "",
   batch_id: lumpia.id
 })
 order21 = OrderOption.create!({
   cost: 7,
   qty: 15,
   description: "free delivery",
   batch_id: lumpia.id
 })
 order22 = OrderOption.create!({
   cost: 8,
   qty: 5,
   description: "",
   batch_id: summer.id
 })
 order23 = OrderOption.create!({
   cost: 3,
   qty: 1,
   description: "",
   batch_id: coconut.id
 })
 order24 = OrderOption.create!({
   cost: 6,
   qty: 5,
   description: "free delivery",
   batch_id: coconut.id
 })
 order25 = OrderOption.create!({
   cost: 8,
   qty: 3,
   description: "",
   batch_id: sun.id
 })
 order26 = OrderOption.create!({
   cost: 10,
   qty: 5,
   description: "free delivery",
   batch_id: sun.id
 })
 order27 = OrderOption.create!({
   cost: 3,
   qty: 1,
   description: "",
   batch_id: bawan.id
 })
 order28 = OrderOption.create!({
   cost: 15,
   qty: 5,
   description: "free delivery",
   batch_id: bawan.id
 })
 order29 = OrderOption.create!({
   cost: 10,
   qty: 10,
   description: "",
   batch_id: eggplant.id
 })
 order30 = OrderOption.create!({
   cost: 12,
   qty: 15,
   description: "free delivery",
   batch_id: eggplant.id
 })
 order31 = OrderOption.create!({
   cost: 13,
   qty: 10,
   description: "",
   batch_id: pork.id
 })
 order32 = OrderOption.create!({
   cost: 17,
   qty: 15,
   description: "free delivery",
   batch_id: pork.id
 })
 order33 = OrderOption.create!({
   cost: 7,
   qty: 3,
   description: "",
   batch_id: chive.id
 })
 order34 = OrderOption.create!({
   cost: 10,
   qty: 10,
   description: "free delivery",
   batch_id: chive.id
 })
 order35 = OrderOption.create!({
   cost: 6,
   qty: 2,
   description: "",
   batch_id: wa.id
 })
 order36 = OrderOption.create!({
   cost: 10,
   qty: 5,
   description: "free delivery",
   batch_id: wa.id
 })
 order37 = OrderOption.create!({
   cost: 3,
   qty: 5,
   description: "",
   batch_id: stinky.id
 })
 order38 = OrderOption.create!({
   cost: 6,
   qty: 10,
   description: "free delivery",
   batch_id: stinky.id
 })
 order39 = OrderOption.create!({
   cost: 4,
   qty: 1,
   description: "",
   batch_id: jap.id
 })
 order40 = OrderOption.create!({
   cost: 8,
   qty: 3,
   description: "free delivery",
   batch_id: jap.id
 })
 order41 = OrderOption.create!({
   cost: 5,
   qty: 10,
   description: "",
   batch_id: chicken.id
 })
 order42 = OrderOption.create!({
   cost: 10,
   qty: 15,
   description: "free delivery",
   batch_id: chicken.id
 })
 order43 = OrderOption.create!({
   cost: 4,
   qty: 3,
   description: "",
   batch_id: porksung.id
 })
 order44 = OrderOption.create!({
   cost: 4,
   qty: 3,
   description: "",
   batch_id: pineapple.id
 })
 order45 = OrderOption.create!({
   cost: 7,
   qty: 3,
   description: "",
   batch_id: vzongzi.id
 })
 order46 = OrderOption.create!({
   cost: 7,
   qty: 3,
   description: "",
   batch_id: pzongzi.id
 })
 order47 = OrderOption.create!({
   cost: 20,
   qty: 10,
   description: "free delivery",
   batch_id: pzongzi.id
 })
 order48 = OrderOption.create!({
   cost: 3,
   qty: 1,
   description: "",
   batch_id: congee.id
 })
 order49 = OrderOption.create!({
   cost: 3,
   qty: 5,
   description: "",
   batch_id: youtiao.id
 })
 order50 = OrderOption.create!({
   cost: 5,
   qty: 10,
   description: "free delivery",
   batch_id: youtiao.id
 })
 order51 = OrderOption.create!({
   cost: 5,
   qty: 1,
   description: "",
   batch_id: noodles.id
 })
 order52 = OrderOption.create!({
   cost: 10,
   qty: 2,
   description: "",
   batch_id: noodles.id
 })
 order53 = OrderOption.create!({
   cost: 5,
   qty: 5,
   description: "",
   batch_id: riceroll.id
 })
 order54 = OrderOption.create!({
   cost: 9,
   qty: 10,
   description: "free delivery",
   batch_id: riceroll.id
 })
 order55 = OrderOption.create!({
   cost: 2,
   qty: 2,
   description: "",
   batch_id: puto.id
 })
 order56 = OrderOption.create!({
   cost: 2,
   qty: 2,
   description: "",
   batch_id: pancit.id
 })
 order57 = OrderOption.create!({
   cost: 4,
   qty: 5,
   description: "",
   batch_id: puto.id
 })
 order58 = OrderOption.create!({
   cost: 4,
   qty: 5,
   description: "",
   batch_id: pancit.id
 })




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

orders = Order.create!([
 {
   customer_id: filip.id,
   order_option_id: order1.id },
 {
   customer_id: chinese.id,
   order_option_id: order2.id },
 {
   customer_id: cantonese.id,
   order_option_id: order3.id },
 {
   customer_id: korean.id,
   order_option_id: order4.id },
 {
   customer_id: vietnam.id,
   order_option_id: order5.id },
 {
   customer_id: japanese.id,
   order_option_id: order6.id },
 {
   customer_id: taiwanese.id,
   order_option_id: order7.id },
 {
   customer_id: taiwanese2.id,
   order_option_id: order8.id },
 {
   customer_id: cantonese2.id,
   order_option_id: order9.id },
 {
   customer_id: cantonese2.id,
   order_option_id: order10.id },
 {
   customer_id: filip.id,
   order_option_id: order11.id },
 {
   customer_id: chinese.id,
   order_option_id: order12.id },
 {
   customer_id: cantonese.id,
   order_option_id: order13.id },
 {
   customer_id: korean.id,
   order_option_id: order14.id },
 {
   customer_id: vietnam.id,
   order_option_id: order15.id },
 {
   customer_id: japanese.id,
   order_option_id: order16.id },
 {
   customer_id: taiwanese.id,
   order_option_id: order17.id },
 {
   customer_id: taiwanese2.id,
   order_option_id: order18.id },
 {
   customer_id: cantonese2.id,
   order_option_id: order19.id },
 {
   customer_id: cantonese2.id,
   order_option_id: order20.id },
 {
   customer_id: filip.id,
   order_option_id: order21.id },
 {
   customer_id: chinese.id,
   order_option_id: order22.id },
 {
   customer_id: cantonese.id,
   order_option_id: order23.id },
 {
   customer_id: korean.id,
   order_option_id: order24.id },
 {
   customer_id: vietnam.id,
   order_option_id: order25.id },
 {
   customer_id: japanese.id,
   order_option_id: order26.id },
 {
   customer_id: taiwanese.id,
   order_option_id: order27.id },
 {
   customer_id: taiwanese2.id,
   order_option_id: order28.id },
 {
   customer_id: cantonese2.id,
   order_option_id: order29.id },
 {
   customer_id: cantonese2.id,
   order_option_id: order30.id },
 {
   customer_id: filip.id,
   order_option_id: order31.id },
 {
   customer_id: chinese.id,
   order_option_id: order32.id },
 {
   customer_id: cantonese.id,
   order_option_id: order33.id },
 {
   customer_id: korean.id,
   order_option_id: order34.id },
 {
   customer_id: vietnam.id,
   order_option_id: order35.id },
 {
   customer_id: japanese.id,
   order_option_id: order36.id },
 {
   customer_id: taiwanese.id,
   order_option_id: order37.id },
 {
   customer_id: taiwanese2.id,
   order_option_id: order38.id },
 {
   customer_id: cantonese2.id,
   order_option_id: order39.id },
 {
   customer_id: cantonese2.id,
   order_option_id: order40.id },
 {
   customer_id: filip.id,
   order_option_id: order41.id },
 {
   customer_id: chinese.id,
   order_option_id: order42.id },
 {
   customer_id: cantonese.id,
   order_option_id: order43.id },
 {
   customer_id: korean.id,
   order_option_id: order44.id },
 {
   customer_id: vietnam.id,
   order_option_id: order45.id },
 {
   customer_id: japanese.id,
   order_option_id: order46.id },
 {
   customer_id: taiwanese.id,
   order_option_id: order47.id },
 {
   customer_id: taiwanese2.id,
   order_option_id: order48.id },
 {
   customer_id: cantonese2.id,
   order_option_id: order49.id },
 {
   customer_id: cantonese2.id,
   order_option_id: order50.id },
 {
   customer_id: filip.id,
   order_option_id: order51.id },
 {
   customer_id: chinese.id,
   order_option_id: order52.id },
 {
   customer_id: cantonese.id,
   order_option_id: order53.id },
 {
   customer_id: korean.id,
   order_option_id: order54.id },
 {
   customer_id: vietnam.id,
   order_option_id: order55.id },
 {
   customer_id: japanese.id,
   order_option_id: order56.id },
 {
   customer_id: taiwanese.id,
   order_option_id: order57.id },
 {
   customer_id: taiwanese2.id,
   order_option_id: order58.id }])
