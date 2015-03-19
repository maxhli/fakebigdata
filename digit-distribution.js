/* 	This file holds code for determining the distribution of all 10 digits 0-9 
	that comprise an integer in base 10. */ 

//Create a big-integer class
var bigInt = require("big-integer");


//This function returns an array of length 10: each element represents
//the percentage of the input integer taken up by the index of that element.
//Thus, the element at index 0 represents the percentage of the input comprised by 
//the digit 0.
function digitDistribution(num) {
	num = num.toString();

	var countArray = [0,0,0,0,0,0,0,0,0,0];
	var percentageArray = [0,0,0,0,0,0,0,0,0,0];
	for(var i = 0; i < num.length; i++) {
		countArray[num.charAt(i)]++;
	}
	for(var i = 0; i < 10; i++) {
		percentageArray[i] = countArray[i] / num.length * 100;
	}

	return percentageArray;
}


console.log(digitDistribution(1234521));