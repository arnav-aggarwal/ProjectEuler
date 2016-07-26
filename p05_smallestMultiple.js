/*2520 is the smallest number that can be divided 
 * by each of the numbers from 1 to 10 without
 * any remainder. 
 *
 * What is the smallest positive number that is evenly
 * divisible by all of the numbers from 1 to 20?
 */

//20 19 18 17 16 14 11 should take care of everything...

/*
 * smallestMultiple will take in a maximum value y and return the
 * smallest integer x such that x is divisible by all integers from
 * 2 to y. For example, if 10 is passed in, the return value will be
 * the smallest value divisible by every value in range(1, 10).
 *
 * @param maximum divisor to test
 *
 * @return the smallest integer divisible by all
 */
function smallestMultiple(maxDivisor) {
	var outerIndex, innerIndex;

	for (outerIndex = maxDivisor; 1; outerIndex ++) {
		for (innerIndex = 2; innerIndex <= maxDivisor; innerIndex++) {
			if (outerIndex % innerIndex) {
				break;
			}

			if (innerIndex === maxDivisor) {
				return outerIndex;
			}
		}
	}
}

console.log(smallestMultiple(20));
