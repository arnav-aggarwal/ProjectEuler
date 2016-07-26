//asdfasdf
//
//
//
/*
 * Find the sum of the even-valued terms of the Fibonacci
 * sequence up to the largest Fibonacci value under 4 million.
 */


//returns an array of fibonacci numbers. largest value in the
//array is smaller than or equal to the value passed in
function fibSeq(maxValue) {
	var index, fibArray, nextVal;
	
	if (maxValue < 1) {
		console.log("Error: Please enter positive integers!");	
		return [];
	}

	index = 0;
	nextVal = 1;
	fibArray = [1];

	do {	
		fibArray.push(nextVal);
		index++;
		nextVal = fibArray[index] + fibArray[index - 1];
	} while(nextVal <= maxValue);
	
	return fibArray;	
}

//tells if a passed-in number is even. returns true/false
function isEven(num) {
	return !(num % 2);
}

//------------------------------------------------------------------
var maxNum = 4000000;

//reduce array to only evens
var fibEvens = fibSeq(maxNum).filter(isEven);

//get the sum
var fibSeqSum = fibEvens.reduce(function(num1, num2) {
	return num1 + num2;
});

console.log(fibSeqSum);
