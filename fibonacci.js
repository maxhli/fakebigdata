/* Please put your code here for how to generate a Fibonacci number.
*/

//This function returns the ith Fibonacci number in the Fiboncacci Sequence.
//@param index the index of the desired Fibonacci number
function fibonacci(index) {
	if(index > 1) {
		return index += fibonacci(index - 1);
	} else {
		return index;
	}
}