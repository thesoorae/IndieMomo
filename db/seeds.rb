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
 
