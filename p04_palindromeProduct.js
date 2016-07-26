/*A palindromic number reads the same both ways.
 * The largest palindrome made from the product
 * of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product
 * of two 3-digit numbers.
 */

/*
 * isPalindrome takes in a number and checks whether
 * it is a palindrome by converting it to a string and
 * checking the characters one by one. Returns true or false.
 *
 * @param the number to check
 *
 * @return true/false
 */
function isPalindrome(num) {
	var numString, lastIndex, index;

	numString = num.toString();
	lastIndex = numString.length - 1;

	for (index = 0; index < numString.length / 2; index++) {
		if (numString.charAt(index) !== numString.charAt(lastIndex - index)) {
			return false;
		}
	}
	
	return true;
}


/*
 * Creating an array with every palindrome in the set of two 3-digit
 * numbers multiplied together
 */
var outerIndex, innerIndex;	//indices of the outer and inner for-loops
var maxVal, minVal;			//max and min values to multiply together
var palindromeArray;		//stores all palindromes
var testVal;				//the value being tested with isPalindrome()
var largestPalindrome;		//the largest palindrome

maxVal = 999;
minVal = 100;
palindromeArray = [];

for (outerIndex = maxVal; outerIndex >= minVal; outerIndex--) {
	for (innerIndex = maxVal; innerIndex >= minVal; innerIndex--) {
		testVal = outerIndex * innerIndex;
		if (isPalindrome(testVal)) {
			palindromeArray.push(testVal);
		}
	}
}

//Find the largest value in the array
largestPalindrome = palindromeArray.reduce(function (num1, num2) {
		return Math.max(num1, num2);
	});

console.log(largestPalindrome);
