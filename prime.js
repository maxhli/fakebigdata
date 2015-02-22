/* Please put your code here for how to generate a prime number.
*/

//Create a big-integer class
var bigInt = require("big-integer");

//This function returns the ith prime number (determined by the index parameter).
//@param index the index of the prime number to be generated.
function prime(index) {
	if(index < 1) {
		return "Improper input to function prime";
	}
	var primeCount = 0;
	var prm = bigInt(2);
	var returnPrime;
	while(primeCount < index) {
		if(prm.isPrime()) {
			returnPrime = prm.toString();
			primeCount++;
		}
		prm = prm.next();
	}
	return returnPrime;
}

console.log(prime(5));