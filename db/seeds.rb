Post.destroy_all
City.destroy_all

jdoe = User.create({
    username: "John Doe",
    email: "johns@e.mail",
    admin: false,
    bio: "nonsense text",
    current_city: "Atlanta",
    fav_city: "Atlanta"
})
rfake = User.create({
    username: "Ryu Fake",
    email: "streetfighter@cap.com",
    admin: false,
    bio: "Hadoken",
    current_city: "Miami",
    fav_city: "Atlanta"
})

atl = City.create({
    name: "Atlanta",
    img_url: "https://images.unsplash.com/photo-1504889100631-d557a48f0d30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3e0bbe98f30034814a40c517f9d261b9&auto=format&fit=crop&w=676&q=80"
})

lon = City.create({
    name: "London",
    img_url: "https://images.unsplash.com/photo-1483972117325-ce4920ff780b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5830a78b35e9940bcec0a989f405aea7&auto=format&fit=crop&w=1500&q=80"
})

san = City.create({
    name: "San Francisco",
    img_url: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7402cc297bdfbb4a4856e764971dc013&auto=format&fit=crop&w=1400&q=60"
})

mia = City.create({
    name: "Miami",
    img_url: "https://images.unsplash.com/photo-1490309465502-86ef8656e567?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8a4a52ba714be6ccb562ac679636227&auto=format&fit=crop&w=1334&q=80"
})

atl_post1 = Post.create({
    title: "Atlanta is great!",
    body: "I love it here. there's so much happening in this city right now.",
    city_id: atl.id,
    user_id: jdoe.id
})
atl_post2 = Post.create({
    title: "I like Atlanta",
    body: "Not as much as a I had hoped for, but cool place nonetheless",
    city_id: atl.id,
    user_id: rfake.id
})

lond_post1 = Post.create({
    title: "What a Blast",
    body: "Plenty of fun to be had. We caught a football game, ate and drank in a pub, caught a double decker bus ride, and went to see the palace. It's a little pricy at times, and more fun for adults. DOn't forget an umbrella",
    city_id: lon.id,
    user_id: rfake.id
})

lond_post2 = Post.create({
    title: "Ugh, Yuck",
    body: "Not known for it's food, and for good reason. Everything is greasy/fried/entrails with a bland beer",
    city_id: lon.id,
    user_id: rfake.id
})

lond_post3 = Post.create({
    title: "Tasty",
    body: "I dont know what others are talking about, I loved the food, and especially the fine British ales.",
    city_id: lon.id,
    user_id: rfake.id
})

san_post1 = Post.create({
    title: "Pricy, but fun",
    body: "but what would you expect, it's California. Plenty to do here at all hours of the day. The Golden Gate Bridge is a bucket list item",
    city_id: san.id,
    user_id: rfake.id
})

san_post2 = Post.create({
    title: "Can't wait to go back",
    body: "It was so much fun. The people, the atmosphere, the cuisine; all a breath of fresh air.",
    city_id: san.id,
    user_id: rfake.id
})

mia_post2 = Post.create({
    title: "Miami is great",
    body: "This place is hot and the fighting is fun.",
    city_id: mia.id,
    user_id: rfake.id
})
