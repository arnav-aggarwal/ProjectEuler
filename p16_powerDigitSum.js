/*
 * 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 * What is the sum of the digits of the number 2^1000?
 */

function sumOfDigits(num) {
	var index, sum, originalNum;
	sum = 0;
	originalNum = num;
	
	for (index = 0; index < String(originalNum).length; index++) {
		sum += num % 10;
		num = parseInt(num / 10);
	}

	return sum;

}




var power = 15;



var number = Math.pow(2, power);
console.log(sumOfDigits(number));
