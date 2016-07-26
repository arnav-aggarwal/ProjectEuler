/*The sum of the squares of the first ten natural numbers is,
 * 
 * 1^2 + 2^2 + ... + 10^2 = 385
 * The square of the sum of the first ten natural numbers is,
 *
 * (1 + 2 + ... + 10)2 = 55^2 = 3025
 *
 * Hence the difference between the sum of the squares of the
 * first ten natural numbers and the square of the sum is
 * 3025 - 385 = 2640.
 *
 * Find the difference between the sum of the squares of the
 * first one hundred natural numbers and the square of the sum.
 */

/*
 * sumOfExponentials will take a maximum value. It will take all
 * numbers from 1 to this value, apply the power operation to
 * the power passed in (default 2), and sum those values.
 *
 * @param the maximum value to find the power of
 * @param the exponent (optional, default 2)
 *
 * @return the sum
 */
function sumOfExponentials(maxValue, power) {
	var index, sum;
	
	if (power === undefined) power = 2;
	sum = 0;

	for (index = 1; index <= maxValue; index++) {
		sum += Math.pow(index, power);
	}

	return sum;
}

/*
 * exponentialOfSum takes in a maximum value and sums up the
 * numbers in range(1, maxValue). It then applies an exponential
 * function to the power of the 2nd argument (optional, default is 2)
 *
 * @param the maximum value to sum up, from 1 to maxValue
 * @param the exponent (optional, default 2)
 *
 * @return the exponential of the sum
 */
function exponentialOfSum(maxValue, power) {
	var index, sum;

	if (power === undefined) power = 2;
	sum = 0;

	for (index = 1; index <= maxValue; index++) {
		sum += index;
	}

	return Math.pow(sum, power);
}

console.log(exponentialOfSum(100) - sumOfExponentials(100));
