/*The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

/* isPrime takes a number and returns whether or not it
 * is prime.
 *
 * @param number to test
 * @return true or false
 */
function isPrime(number) {
	var index, root;
	root = Math.sqrt(number);
	for (index = 2; index <= root; index++) {
		if (!(number % index))
			return false;
	}

	return true;
}

/*
 * largestPrime finds the largest prime factor of a given number.
 *
 * @param num - the number of interest
 * @return the largest prime
 */
function largestPrime(num) {
	var index, primeArray; 
	
	primeArray = [];

	for (index = 2; index <= Math.sqrt(num); index++) {
		if (!(num % index) && isPrime(index)) {
			primeArray.push(index);
		}
	}
	
	return primeArray[primeArray.length - 1];
}

var number = 600851475143;
console.log(largestPrime(number));
