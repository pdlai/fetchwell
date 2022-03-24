# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# user1 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
# user2 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')

# chirp1 = Chirp.create(body: Faker::Movies::HarryPotter.quote, author_id: user1.id)
# chirp2 = Chirp.create(body: Faker::Movies::HarryPotter.quote, author_id: user1.id)
# chirp3 = Chirp.create(body: Faker::Movies::HarryPotter.quote, author_id: user1.id)
# chirp4 = Chirp.create(body: Faker::Movies::HarryPotter.quote, author_id: user2.id)
# chirp5 = Chirp.create(body: Faker::Movies::HarryPotter.quote, author_id: user2.id)
# chirp6 = Chirp.create(body: Faker::Movies::HarryPotter.quote, author_id: user2.id)

# Like.create(user_id: user3.id, chirp_id: chirp1.id)
# Like.create(user_id: user4.id, chirp_id: chirp2.id)
# Like.create(user_id: user5.id, chirp_id: chirp3.id)
# Like.create(user_id: user3.id, chirp_id: chirp3.id)
# Like.create(user_id: user4.id, chirp_id: chirp1.id)
# Like.create(user_id: user5.id, chirp_id: chirp2.id)


Like.delete_all
Review.delete_all
CartItem.delete_all
User.delete_all
Product.delete_all

Faker::Name.unique.clear
demouser = User.create(username: "Demo User", password: 'password')
user1 = User.create(username: "user1", password: 'password')
user2 = User.create(username: Faker::Name.unique.name, password: 'password')
user3 = User.create(username: Faker::Name.unique.name, password: 'password')
user4 = User.create(username: Faker::Name.unique.name, password: 'password')
user5 = User.create(username: Faker::Name.unique.name, password: 'password')
user6 = User.create(username: Faker::Name.unique.name, password: 'password')
user7 = User.create(username: Faker::Name.unique.name, password: 'password')
user8 = User.create(username: Faker::Name.unique.name, password: 'password')
user9 = User.create(username: Faker::Name.unique.name, password: 'password')

pants1 = Product.create(name: "pants1", gender: "womens", category: "clothes", subcategory: "pants", price: 1.99, description: "nice pants", image_url: "/assets/images/test_pants.jpg")
pants2 = Product.create(name: "pants2", gender: "womens", category: "clothes", subcategory: "pants", price: 2.99, description: "nice pants", image_url: "/assets/images/test_pants.jpg")
pants3 = Product.create(name: "pants3", gender: "womens", category: "clothes", subcategory: "pants", price: 3.99, description: "nice pants", image_url: "/assets/images/test_pants.jpg")
pants4 = Product.create(name: "pants4", gender: "womens", category: "clothes", subcategory: "pants", price: 4.99, description: "nice pants", image_url: "/assets/images/test_pants.jpg")
pants5 = Product.create(name: "pants5", gender: "womens", category: "clothes", subcategory: "pants", price: 5.99, description: "nice pants", image_url: "/assets/images/test_pants.jpg")
pants6 = Product.create(name: "pants6", gender: "womens", category: "clothes", subcategory: "pants", price: 6.99, description: "nice pants", image_url: "/assets/images/test_pants.jpg")
pants7 = Product.create(name: "pants7", gender: "womens", category: "clothes", subcategory: "pants", price: 7.99, description: "nice pants", image_url: "/assets/images/test_pants.jpg")
pants8 = Product.create(name: "pants8", gender: "womens", category: "clothes", subcategory: "pants", price: 8.99, description: "nice pants", image_url: "/assets/images/test_pants.jpg")
pants9 = Product.create(name: "pants9", gender: "womens", category: "clothes", subcategory: "pants", price: 9.99, description: "nice pants", image_url: "/assets/images/test_pants.jpg")

CartItem.create(quantity: 1, size: "M", user_id: user1.id, product_id: pants1.id)
CartItem.create(quantity: 2, size: "M", user_id: user2.id, product_id: pants2.id)
CartItem.create(quantity: 3, size: "M", user_id: user3.id, product_id: pants3.id)
CartItem.create(quantity: 4, size: "M", user_id: user4.id, product_id: pants4.id)
CartItem.create(quantity: 5, size: "M", user_id: user5.id, product_id: pants5.id)
CartItem.create(quantity: 6, size: "M", user_id: user6.id, product_id: pants6.id)
CartItem.create(quantity: 7, size: "M", user_id: user7.id, product_id: pants7.id)
CartItem.create(quantity: 8, size: "M", user_id: user8.id, product_id: pants8.id)
CartItem.create(quantity: 9, size: "M", user_id: user9.id, product_id: pants9.id)

review1 = Review.create(location: Faker::Address.city + ", " + Faker::Address.state_abbr, overall_fit: Faker::Number.between(from: 30, to: 70), rating: Faker::Number.between(from: 3, to: 5), summary: "Good", description: "Finally found some pants that I like. Very good material and does not shrink in dryer.", author_id: user1.id, product_id: pants1.id )
review2 = Review.create(location: Faker::Address.city + ", " + Faker::Address.state_abbr, overall_fit: Faker::Number.between(from: 30, to: 70), rating: Faker::Number.between(from: 3, to: 5), summary: "Good", description: "Finally found some pants that I like. Very good material and does not shrink in dryer.", author_id: user2.id, product_id: pants2.id )
review3 = Review.create(location: Faker::Address.city + ", " + Faker::Address.state_abbr, overall_fit: Faker::Number.between(from: 30, to: 70), rating: Faker::Number.between(from: 3, to: 5), summary: "Good", description: "Finally found some pants that I like. Very good material and does not shrink in dryer.", author_id: user3.id, product_id: pants3.id )
review4 = Review.create(location: Faker::Address.city + ", " + Faker::Address.state_abbr, overall_fit: Faker::Number.between(from: 30, to: 70), rating: Faker::Number.between(from: 3, to: 5), summary: "Good", description: "Finally found some pants that I like. Very good material and does not shrink in dryer.", author_id: user4.id, product_id: pants4.id )
review5 = Review.create(location: Faker::Address.city + ", " + Faker::Address.state_abbr, overall_fit: Faker::Number.between(from: 30, to: 70), rating: Faker::Number.between(from: 3, to: 5), summary: "Good", description: "Finally found some pants that I like. Very good material and does not shrink in dryer.", author_id: user5.id, product_id: pants5.id )
review6 = Review.create(location: Faker::Address.city + ", " + Faker::Address.state_abbr, overall_fit: Faker::Number.between(from: 30, to: 70), rating: Faker::Number.between(from: 3, to: 5), summary: "Good", description: "Finally found some pants that I like. Very good material and does not shrink in dryer.", author_id: user6.id, product_id: pants6.id )
review7 = Review.create(location: Faker::Address.city + ", " + Faker::Address.state_abbr, overall_fit: Faker::Number.between(from: 30, to: 70), rating: Faker::Number.between(from: 3, to: 5), summary: "Good", description: "Finally found some pants that I like. Very good material and does not shrink in dryer.", author_id: user7.id, product_id: pants7.id )
review8 = Review.create(location: Faker::Address.city + ", " + Faker::Address.state_abbr, overall_fit: Faker::Number.between(from: 30, to: 70), rating: Faker::Number.between(from: 3, to: 5), summary: "Good", description: "Finally found some pants that I like. Very good material and does not shrink in dryer.", author_id: user8.id, product_id: pants8.id )
review9 = Review.create(location: Faker::Address.city + ", " + Faker::Address.state_abbr, overall_fit: Faker::Number.between(from: 30, to: 70), rating: Faker::Number.between(from: 3, to: 5), summary: "Good", description: "Finally found some pants that I like. Very good material and does not shrink in dryer.", author_id: user9.id, product_id: pants9.id )

review11 = Review.create(location: Faker::Address.city + ", " + Faker::Address.state_abbr, overall_fit: Faker::Number.between(from: 30, to: 70), rating: Faker::Number.between(from: 1, to: 2), summary: "Not so great", description: "Pants did not look like in the description. Material was not great and rough on the skin.", author_id: user5.id, product_id: pants1.id )
review12 = Review.create(location: Faker::Address.city + ", " + Faker::Address.state_abbr, overall_fit: Faker::Number.between(from: 30, to: 70), rating: Faker::Number.between(from: 1, to: 2), summary: "Not so great", description: "Pants did not look like in the description. Material was not great and rough on the skin.", author_id: user8.id, product_id: pants2.id )
review13 = Review.create(location: Faker::Address.city + ", " + Faker::Address.state_abbr, overall_fit: Faker::Number.between(from: 30, to: 70), rating: Faker::Number.between(from: 1, to: 2), summary: "Not so great", description: "Pants did not look like in the description. Material was not great and rough on the skin.", author_id: user7.id, product_id: pants3.id )
review14 = Review.create(location: Faker::Address.city + ", " + Faker::Address.state_abbr, overall_fit: Faker::Number.between(from: 30, to: 70), rating: Faker::Number.between(from: 1, to: 2), summary: "Not so great", description: "Pants did not look like in the description. Material was not great and rough on the skin.", author_id: user6.id, product_id: pants4.id )
review15 = Review.create(location: Faker::Address.city + ", " + Faker::Address.state_abbr, overall_fit: Faker::Number.between(from: 30, to: 70), rating: Faker::Number.between(from: 1, to: 2), summary: "Not so great", description: "Pants did not look like in the description. Material was not great and rough on the skin.", author_id: user9.id, product_id: pants5.id )
review16 = Review.create(location: Faker::Address.city + ", " + Faker::Address.state_abbr, overall_fit: Faker::Number.between(from: 30, to: 70), rating: Faker::Number.between(from: 1, to: 2), summary: "Not so great", description: "Pants did not look like in the description. Material was not great and rough on the skin.", author_id: user4.id, product_id: pants6.id )
review17 = Review.create(location: Faker::Address.city + ", " + Faker::Address.state_abbr, overall_fit: Faker::Number.between(from: 30, to: 70), rating: Faker::Number.between(from: 1, to: 2), summary: "Not so great", description: "Pants did not look like in the description. Material was not great and rough on the skin.", author_id: user3.id, product_id: pants7.id )
review18 = Review.create(location: Faker::Address.city + ", " + Faker::Address.state_abbr, overall_fit: Faker::Number.between(from: 30, to: 70), rating: Faker::Number.between(from: 1, to: 2), summary: "Not so great", description: "Pants did not look like in the description. Material was not great and rough on the skin.", author_id: user2.id, product_id: pants8.id )
review19 = Review.create(location: Faker::Address.city + ", " + Faker::Address.state_abbr, overall_fit: Faker::Number.between(from: 30, to: 70), rating: Faker::Number.between(from: 1, to: 2), summary: "Not so great", description: "Pants did not look like in the description. Material was not great and rough on the skin.", author_id: user1.id, product_id: pants9.id )

Like.create(user_id: user1.id, review_id: review2.id)
Like.create(user_id: user2.id, review_id: review3.id)
Like.create(user_id: user3.id, review_id: review4.id)
Like.create(user_id: user4.id, review_id: review5.id)
Like.create(user_id: user5.id, review_id: review6.id)
Like.create(user_id: user6.id, review_id: review7.id)
Like.create(user_id: user7.id, review_id: review8.id)
Like.create(user_id: user8.id, review_id: review9.id)
Like.create(user_id: user9.id, review_id: review1.id)

Like.create(user_id: user1.id, review_id: review3.id)
Like.create(user_id: user2.id, review_id: review4.id)
Like.create(user_id: user3.id, review_id: review5.id)
Like.create(user_id: user4.id, review_id: review6.id)
Like.create(user_id: user5.id, review_id: review7.id)
Like.create(user_id: user6.id, review_id: review8.id)
Like.create(user_id: user7.id, review_id: review9.id)
Like.create(user_id: user8.id, review_id: review1.id)
Like.create(user_id: user9.id, review_id: review2.id)

