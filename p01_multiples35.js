/*If we list all the natural numbers below 10 that
 * are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.

 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

function isMultipleOf(num, test) {
	if (!(num % test)) return true;
	else return false;
}

var index, maxVal, multiplesArray;
multiplesArray = [];

//------------------------------------------------------------------------
maxVal = 1000;
//------------------------------------------------------------------------

for (index = 2; index < maxVal; index++) {
	if (isMultipleOf(index, 3) || isMultipleOf(index, 5))
		multiplesArray.push(index);
}

console.log(multiplesArray.reduce(function(num1, num2) {return num1 + num2}));
