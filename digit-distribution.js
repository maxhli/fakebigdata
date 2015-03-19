/* 	This file holds code for determining the distribution of all 10 digits 0-9 
	that comprise an integer in base 10. */ 

//Create a big-integer class
//Currently not in use.
var bigInt = require("big-integer");


//This function reads in an integer and returns an array of length 10, representing the percentages
//of the integer comprised by the digits 0-9. Thus, the element at index 0 represents the percentage of
//the integer made up of the digit 0.
//
//NOTE: "Javascript numbers larger than 9007199254740992 and smaller than -9007199254740992 are not precisely
//represented numbers and will not produce exact results. If you are dealing with numbers outside that range,
//it is better to pass in strings."
//-peterolson, creator of the big-integer class.
function digitDistribution(num) {
	//Check to make sure that the input is an integer in base 10:
	if(isNaN(num))
		return "Improper input to function digitDistribution. Please input an integer in base 10.";

	//Get string representation of input:
	var str = num.toString();

	//Check to see if the input contains a "-" or a "+" prefix; if so, remove it before continuing:
	if(str.indexOf('-') >= 0 || str.indexOf('+') >= 0)
		str = str.substring(1);

	//Initialize a count array for frequencies of digits 0-9:
	var countArray = [0,0,0,0,0,0,0,0,0,0];
	//Initialize a percentage array to be determined by the count array:
	var percentageArray = [0,0,0,0,0,0,0,0,0,0];

	//Count the frequency of each digit 0-9 in the input number:
	for(var i = 0; i < str.length; i++) {
		countArray[str.charAt(i)]++;
	} 

	//Turn counts into percentages (rounded to 2 decimal places) and puts them in the percentageArray:
	for(var i = 0; i < 10; i++) {
		percentageArray[i] = Math.round(countArray[i] / str.length * 100 * 100) / 100;
	}

	//Return the frequency percentages:
	return percentageArray;
}//End function digitDistribution

console.log(digitDistribution("-99878777657678979808987988912322342354564567434"));