require './NumberFileOutput.rb'
require './FibonacciLoop.rb'



starting = ARGV[0].to_i
ending = ARGV[1].to_i

width = 70
left = 5
right = 5
numberOut = NumberFileOutput.new(width, left, right)

fibonacciWithLoop = FibonacciLoop.new



for loop in starting..ending do
  puts "loop is: #{loop}"

  value = fibonacciWithLoop.calculate(loop)
  
  numberOut.format('data/fibonacci' + loop.to_s + 'W' + width.to_s + 
    'L' + left.to_s + 'R' + right.to_s + '.txt', value.to_s)
end
