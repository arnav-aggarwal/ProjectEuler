/* A Pythagorean triplet is a set of three natural numbers,
 * a < b < c, for which,
 * 
 * a^2 + b^2 = c^2
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 * 
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

var testNum = 240;

function firstPythagoreanTriplet(sum) {
	var a, b, c, minSide;
	c = sum;
	minSide = 3;

	var counter = 0;

	for (a = minSide; a < sum/4; a++) {	//loop starts at sides of length 3 and 4
		for (b = parseInt(sum/2) - a; b < c; b++) {	//a < b < c, always. a + b > c, always.
			c = sum - a - b;

			console.log("a: " + a + ", b: " + b + ", c: " + c + ", product: " +(a*b*c) +
				", a + b: " + (a + b) + ", a^2 + b^2: " + (Math.pow(a,2) + Math.pow(b,2)) +
				", c^2: " + Math.pow(c,2));

			counter++;
			
			if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
				return ("a = " + a + ", b = " + b + ", c = " + c + ", product = " + (a*b*c)
						+ ", counter: " + counter);
			}
		}
	}
	
	return "No Pythagorean triplet!"
}

console.log(firstPythagoreanTriplet(testNum));
