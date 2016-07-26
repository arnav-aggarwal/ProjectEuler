//Find the 10001st prime #.

/*
 * isPrime takes a number and returns whether or not it
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
 * primeNumber finds the n'th prime number.
 * calls isPrime.
 *
 * @param n - we want the n'th prime number
 * @return the n'th prime number
 */
function primeNumber(nth) {
	var index, primeArray; 
	
	index = 2;
	primeArray = [];

	while (primeArray.length < nth) {
		if (isPrime(index))
			primeArray.push(index);
		index++;
	}
	
	return primeArray[primeArray.length - 1];
}



console.log(primeNumber(10001));
