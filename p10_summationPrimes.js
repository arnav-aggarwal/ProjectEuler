/*The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 */


/*
 * isPrime takes a number and returns whether or not it
 * is prime.
 *
 * @param number to test
 *
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

//Make an array containing primes less than 2 million
var primeArray, index, maxVal;

maxVal = 2000000;
primeArray = [];

for (index = 2; index < maxVal; index++)
	if (isPrime(index))
		primeArray.push(index);

primeSum = primeArray.reduce(function (n1, n2) {return n1 + n2});

console.log(primeSum);
