/* How to generate a Factorial number
*/

var bigInt = require("big-integer");

//This function returns the factorialization of nonnegative integer, and
//makes use of the bigInt datatype.
//@param index the integer to be factorialized
function factorialBigInt(index) {
	var fact =  bigInt(index);
	if(index > 1) {
		return fact = fact.times(factorial(index - 1));
	} else {
		return fact;
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
