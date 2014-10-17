#PrimeNumber Using

require 'prime'

class PrimeNumber

  def calculate(n)
    Prime.first(n).last
  end
end

=begin
a = PrimeNumber.new

(1..1_00).each do |e|
	p a.calculate(e)
end
=end