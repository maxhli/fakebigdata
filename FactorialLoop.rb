#FactorialLoop
class FactorialLoop

  def calculate(n)
	  result = 1;
	  for loop in 1..n do
		result = result * loop
	  end
	  result
	end

	#v1 = ARGV[0].to_i

# p FactorialLoop(v1)
end