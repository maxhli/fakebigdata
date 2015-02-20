/* Please put your code here for how to generate a Fibonacci number.
*/

var bigInt = require("big-integer");

//This function returns the ith Fibonacci number in the Fiboncacci Sequence.
//@param index the index of the desired Fibonacci number
function fibonacci(index) {
	if(index > 2) {
		return fibonacci(index - 1) + fibonacci(index - 2)
	} else {
		return index;
	}
}

function fibonacciBigInteger(index) {
	var fib = bigInt(index);
	if(index > 2) {
		return fib =  fib.add(fibonacci(index - 1)).add(fibonacci(index - 2));
	} else {
		return fib;
	}
}