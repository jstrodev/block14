// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/*           Pseudo Code for getLength function
1. Create getLength function
2. Assign a parameter called numbers that takes in values
3. Return the number of elements in the array
 */

/** 
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */

function getLength(numbers) { 
  return numbers.length; // Gets the number of elements in the numbers array
}

/*          Pseudo Code for getSum function
1. Create getSum function
2. Assign a parameter called numbers that takes in values
3. Add up all values in the array
*/
/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */

function getSum(numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) { // Sum all numbers in the array
    sum = sum + i;
  }
  return sum;
}

/*          Pseudo Code for getMean function
1. Create getMean function
2. Sum all the numbers in the array
3. Divide the sum by the length of numbers in the array
*/
/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  return getSum(numbers) / getLength(numbers);
}

/*          Pseudo Code for getMin function
1. Create getMin function
2. Check all integers to see which one has the lowest value
3. Return the lowest value
*/

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */

function getMin(numbers) {
  if (numbers.length === 0) {
    return null; // Return null or throw an error if the array is empty
  }

  // Setting minimum to first element in the numbers array
  let minimum = numbers[0];
  // Loop through all elements
  for (let i = 1; i < numbers.length; i++) {
    // Compare current element with minimum
    if (numbers[i] < minimum) {
      // Update the minimum value
      minimum = numbers[i];
    }
  }
  return minimum;
}

/*          Pseudo Code for getMax function
1. Create getMax function
2. Check all integers to see which one has the highest value
3. Return the lowest value
*/

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  if (numbers.length === 0) {
    return null; // Return null or throw an error if the array is empty
  }

  // Setting maximum to first element in the numbers array
  let maximum = numbers[0];
  // Loop through all elements
  for (let i = 1; i < numbers.length; i++) {
    // Compare current element with maximum
    if (numbers[i] > maximum) {
      // Update the maximum value
      maximum = numbers[i];
    }
  }
  return maximum;
}


/*          Pseudo Code for getRange function
1. Create getRange function
2. Find the range of the values in the array
3. Return the range value
*/
/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  return getMax(numbers) - getMin(numbers);
}

/*          Pseudo Code for getEvens function
1. Create getEvens function
2. Check each integer to identify even numbers
3. Return the number of even integers
*/
/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  let count = 0; // setting the variable count to 0
  for(let number of numbers) { // This for loop iterates over each element in the array
    if(number % 2 === 0) {
      count++; // Based on the condition of even, adds to the count 
    }
  }
  return count; // returns the number of even integers in the array
}

/*          Pseudo Code for getOdds function
1. Create getOdds function
2. Check each integer to identify odd numbers
3. Return the number of odd integers
*/
/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  let count = 0; // setting the variable count to 0
  for(let number of numbers) { // This for loop iterates over each element in the array
    if(number % 2 !== 0) {
      count++; // Based on the condition of odd, adds to the count
    }
  }
  return count; // returns the number of odd integers in the array
}
