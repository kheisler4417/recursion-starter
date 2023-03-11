/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// Here's a recursive solution for the subsets function:

function subsets(arr) {
  if (arr.length === 0) {
    return [[]];
  } else {
    const last = arr[arr.length - 1];
    const withoutLast = subsets(arr.slice(0, -1));
    const withLast = withoutLast.map(subset => subset.concat(last));
    return withoutLast.concat(withLast);
  }
}

// The function checks if the input array is empty, and if so, returns an array containing the empty array.If the input array is not empty, the function first computes all the subsets of the array without its last element, and then creates new subsets by appending the last element to each of those subsets.The function then concatenates the two sets of subsets and returns the result.

// This function uses recursion to break down the problem of finding all subsets of an array into smaller and smaller subproblems, until we get to the base case of the empty array, at which point we start building up the solution by combining the subsets of the array without its last element with the new subsets that include the last element.

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
