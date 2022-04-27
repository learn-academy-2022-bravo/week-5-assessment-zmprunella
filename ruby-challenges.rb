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


def beverage_sifter(array, letter)
  array.select { |value| value.include?(letter) }
end

p beverage_sifter(beverages_array, letter_o)
p beverage_sifter(beverages_array, letter_t)
Expected output: ['coffee', 'soda water']
Expected output: ['tea', 'water', 'soda water']

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

# create metod with nums_array1
# add all of the #'s together'
# output the sum of all the nums added


def sum_of array
  array.sum
end

p sum_of nums_array1
p sum_of nums_array2
76
100


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# referenced the classess-objects section of the syllabus
# used "class" formula and then plugged in bike info.
# error undefined local variable or method `bike_info'
# not sure why it wont print the info in a sting

class Bike 
  def initialize model
    @model = model
    @wheels = 2
    @current_speed = 0
  end

  def bike_info
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
  end

  def pedal_faster increase_by
    @current_speed += increase_by
  end

  def brake speed_decrease
    @current_speed = @current_speed - speed_decrease # remove given speed_increase to current speed
    if @current_speed.positive?
        @current_speed 
    elsif 
        @current_speed.negative? # trap for when # goes negatove
        @current_speed = 0
    end
  end
end

my_bike = Bike.new "Trek"
p my_bike.bike_info
# "The Trek bike has 2 wheels and is going 0 mph."

p my_bike.pedal_faster(10)
p my_bike.pedal_faster(18)
# 10
# 28

p my_bike.brake(5)
p my_bike.brake(25)


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
