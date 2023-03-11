/***********************************************************************
A shallow copy makes a copy of the reference to X (an array), into Y.
If we were to say something like this for example:
let x = [ [1], [2, 3] ];
let y = x.slice();

In this situation, Y, is a shallow copy of X. Here both X's and Y's VALUES point to the
same place in memory. But hold on you might say, "I just checked y === x is false", while
that is true, what if I told you that x[0] === y[0] is true? Both x[0] and y[0] evaluate to [1] AND
they also share the same memory address that gives us an array of just the number 1 inside.
So for the sake of testing that our addresses are different we will use nested arrays in our
examples to know if our deep duplication has succeeded. You might have already guessed that
since we used 'slice' in the example above that 'slice' creates a shallow copy, and you are
correct. For this problem we duplicate our original array so that our function returns a new
array with different memory adresses.

Write a function, deepDup(arr), that deeply duplicates a given array. Your duplicated array,
when compared to various indexes of the original array, should evaluate to false like below.


Examples:

let arr = [[1], [2, [3]]];
duped = deepDup(arr); // [[1], [2, [3]]]
arr[0] === duped[0] // false
arr[1] === duped[1] // false
arr[1][1] === duped[1][1] // false

Note:
if you compare a 1 dimensional array of numbers like below,
you will get 'true' because we are comparing numbers.
let x = [1, 2, 3];
let y = x.slice();
console.log(x[0] === y[0]) // true


***********************************************************************/

// To deeply duplicate an array, we need to copy all of its elements, including any nested arrays.We can use recursion to achieve this.

//   Here's an implementation of deepDup:

function deepDup(arr) {
  // base case: if the argument is not an array, return it
  if (!Array.isArray(arr)) {
    return arr;
  }

  // recursive case: create a new array and deep-duplicate each element
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(deepDup(arr[i]));
  }
  return result;
}

// The function first checks if the argument is an array using Array.isArray().If it's not an array, it's already a primitive value that doesn't need to be duplicated, so we can return it.

// If the argument is an array, we create a new array called result.We then loop over each element in the original array and push a deep duplicate of it onto result.To deep - duplicate an element, we simply call deepDup() recursively on it.

//   Finally, we return result.

//     Let's test the function:

// lua
// Copy code
// let arr = [[1], [2, [3]]];
// let duped = deepDup(arr);

// console.log(arr[0] === duped[0]); // false
// console.log(arr[1] === duped[1]); // false
// console.log(arr[1][1] === duped[1][1]); // false
// As expected, the comparisons between the elements of the original array and the duplicated array evaluate to false.

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = deepDup;
} catch (e) {
  module.exports = null;
}
