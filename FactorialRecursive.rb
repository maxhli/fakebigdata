#FactorialRecursive

def FactorialRecursive(n)
  if n == 1
	return 1
  else
     return n * FactorialRecursive(n-1)
   end
end

v1 = ARGV[0].to_i

p FactorialRecursive (v1)