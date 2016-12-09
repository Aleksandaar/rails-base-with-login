puts 'Destroying users..'
User.destroy_all

puts "Creating users.."
user = User.create(email: 'test@user.com', password: "password", password_confirmation: "password", created_at: DateTime.now, updated_at: DateTime.now)


puts '------------------------'
puts 'Success. Database seeded.'
puts "\n"
puts "\n"
puts "Login with #{user.email}"
puts "password is: #{user.password}"
puts '------------------------'