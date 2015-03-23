#FibonacciLoop
class FibonacciLoop

  def calculate(n)

    return 1 if n == 1
    return 1 if n == 2
   first, second = 1, 1
   loop = 1
   while (loop <= (n - 2))
     first, second = second, first + second
	 loop += 1
   end
  
    return second
  end
end
