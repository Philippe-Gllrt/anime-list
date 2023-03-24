require 'open-uri'
require 'json'

puts "cleaning database ..."
User.destroy_all
Anime.destroy_all
puts "cleaning done"
puts "seeding..."

user = User.create(
  email: "philippe@lewagon.fr",
  password: "lewagon"
)



20.times do
  rand_id = rand(1..3000)
  url = "https://kitsu.io/api/edge/anime/#{rand_id}"
  begin
    json= JSON.parse(URI.open(url).read)

    Anime.create(
      title: json['data']['attributes']['titles']['en_jp'],
      season: "1",
      synopsis: json['data']['attributes']['synopsis'],
      comment: "very nice anime. I totally recommend it, the animation was amazing.",
      link: json['data']['attributes']['posterImage']['medium'],
      rate_synopsis: rand(0..5),
      rate_animation: rand(0..5),
      user_id: user.id,
    )
    puts json['data']['attributes']['titles']['en_jp']
  rescue OpenURI::HTTPError => e
    puts e.message
  end
end

puts "seeding done"
