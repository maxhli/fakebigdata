/* 	This file holds code for determining the distribution of all 10 digits 0-9 
	that comprise an integer in base 10. */ 

//Create a big-integer class
var bigInt = require("big-integer");


//This function returns an array of length 10: each element represents
//the percentage of the input integer taken up by the index of that element.
//Thus, the element at index 0 represents the percentage of the input comprised by 
//the digit 0.
function digitDistribution(num) {
	//Check to make sure that the input is an integer:
	if(isNaN(num))
		return "Improper input to function digitDistribution. Please input an integer";

	//Create a big-integer representation of the input:
	var bigNum = bigInt(num);
	bigNum = bigInt(bigNum.abs());

	//Create a string representation of the big-integer:
	var str = bigNum.toString();

	//Check to see if the input contains a "-" or a "+" prefix; if so, remove it before continuing:
	//if(str.indexOf('-') >= 0 || str.indexOf('+') >= 0)
		//str = str.substring(1);

	//Initialize a count array for frequencies of digits 0-9:
	var countArray = [0,0,0,0,0,0,0,0,0,0];
	//Initialize a percentage array to be determined by the count array:
	var percentageArray = [0,0,0,0,0,0,0,0,0,0];

	//Count the frequency of each digit 0-9 in the input number:
	for(var i = 0; i < str.length; i++) {
		countArray[str.charAt(i)]++;
	} //End function digitDistribution.

	//Turn counts into percentages to be returned as an array:
	for(var i = 0; i < 10; i++) {
		percentageArray[i] = countArray[i] / str.length * 100;
	}

	//Return the frequency percentages:
	return percentageArray;
}

console.log(digitDistribution("998787776576789798089879889123234"));