/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// Here's a recursive solution to flatten an array:

function flatten(arr) {
  let flattened = [];

  arr.forEach(element => {
    if (Array.isArray(element)) {
      flattened = flattened.concat(flatten(element));
    } else {
      flattened.push(element);
    }
  });

  return flattened;
}

// Here's how it works:

// Create an empty flattened array.
// Iterate over each element in the input arr.
// If the element is an array, recursively call flatten on that array, and concatenate the result to the flattened array.
// If the element is not an array, push it onto the flattened array.
// Return the flattened array.
// The recursion happens in step 3, where we call flatten on the nested array.This continues until we reach a leaf node(an element that is not an array), at which point we push the element onto the flattened array.

// This process continues until we have flattened all the nested arrays in the input array.

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
