/* 
	The prime factors of 13195 are 5, 7, 13 and 29.

	What is the largest prime factor of the given number? 
*/

function largestPrimeFactor(number) {

	// Make a copy of the original number to manipulate it by dividing it by prime factors
	let currentNum = number,
	    result = number, // Set initial result to number, in case it is itself a prime
	    numSqrt = Math.floor(Math.sqrt(number)), // Square root of the number to use to check if number is prime
	    i = 2;

	// Keep going until we check against the number's square root, it's sufficient to check up to it to know whether number is prime
	while(i <= numSqrt) {

		// Check whether the number is divisible by the current "i" value, if yes, then "i" is a prime factor
		if(currentNum % i == 0) {

			currentNum /= i; // Update the current number by dividing it by the current factor "i"
			result = i; // Set to the current prime factor, which is until now the largest, but could be overwritten by the next, larger, factor
			// Don't change the counter, because the new number could also be divisible by it
		} else {
			i++; // Increment if the current number isn't divisible by the factor any more (or if it's not even a prime factor)
		}

	}

    return result;
}

largestPrimeFactor(13195);


// Longer and extremely slower approach
/* 
function largestPrimeFactor(number) {

	let result;

	// Loop through all numbers from 2 to, and including, the passed number, as it might be a prime factor itself
	for(let i = 2; i <= number; i++) {

		// Ignore the counter if the number isn't divisible by it
		if(number % i !== 0) {
			continue;
		}

		// Assume the number is prime by default (Needed for number 2) and change it below if otherwise
		let isPrime = true;

		// Check if number is divisible by numbers other than itself, since every number is divisible by itself
		for(let j = 2; j < i; j++) {

			// If the current number is divisible by any number, it means it's not a prime
			if(i % j === 0) {
				isPrime = false;
				break; // Go to the next number and ignore other numbers, since we already know it's not a prime
			}

		}

		if(isPrime) {
			// Set to the current prime factor, which is until now the largest, but could be overwritten by the next, larger, factor
			result = i;
		}

	}

	return result;
} 

largestPrimeFactor(13195); 
*/

