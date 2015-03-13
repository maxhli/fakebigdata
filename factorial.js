/* How to generate a Factorial number
*/

//Create a big-integer class
var bigInt = require("big-integer");

//This function returns the factorialization of nonnegative integer, and
//makes use of the big-integer datatype.
//@param index the integer to be factorialized
function factorialBigInt(index) {
	if(index < 1 || isNaN(index)) {
		return "Improper input to function factorial. Please input a positive integer.";
	}

	var fact =  bigInt(index);
	if(index > 1) {
		return fact.multiply(factorial(index - 1)).toString();
	} else {
		return fact.toString();
	}
}

//This function returns the factorialization of nonnegative integer
//@param index the integer to be factorialized
function factorial(index) {
	if(index > 1) {
		return index *= factorial(index - 1);
	} else {
		return index;
	}
}

console.log(factorialBigInt(40));