# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# create method with beverages_array as variable 
# use .each and do/end 
# use conditional IF/End and fill in .include wih letter in ''
# p the value 

beverages_array.each do |value|
    if value.include? 't' 
    p value
    end
end

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

# create metod with nums_array1
# add all of the #'s together'
# output the sum of all the nums added


def add (newArray)
  let newArray = []
  return array.map((value, index) => 
  if (index > 0) 
  return newArray = value + newArray
  else 
  return newArray = value
end
p add()

# Not sure why it won't add the numers
# Saying wrong number of arguments


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# referenced the classess-objects section of the syllabus
# used "class" formula and then plugged in bike info.
# error undefined local variable or method `bike_info'
# not sure why it wont print the info in a sting

class Bike
    def initialize(model, wheels, spped)
      @model = trek
      @wheels = 2
      @speed = 0
    end
  
    def bike_info
      "This #{@model} has #{@wheels} wheels and is going #{@speed} mph."
    end
end

p bike_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
