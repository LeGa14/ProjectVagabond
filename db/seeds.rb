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

mia_post2 = Post.create({
    title: "Miami is great",
    body: "This place is hot and the fighting is fun.",
    city_id: mia.id,
    user_id: rfake.id
})