/* Please put your code here for how to generate a Fibonacci number.
*/

//Create a big-integer class
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

function fibonacciBigInt(index) {
	if(index < 1) {
		return "Improper input to function fibonacci";
	}
	var fib = bigInt(index);
	if(index > 2) {
		return bigInt((fibonacciBigInt(index - 1))).add(fibonacciBigInt(index - 2)).toString();
	} else {
		return fib.toString();
	}
}

console.log(fibonacciBigInt(5));