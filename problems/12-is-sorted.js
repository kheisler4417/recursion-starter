/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

// Here's a recursive solution to determine if an array is sorted in ascending order:

function isSorted(arr) {
  // base case: an array of 0 or 1 elements is always sorted
  if (arr.length < 2) {
    return true;
  }

  // recursive case: check if the first two elements are in order,
  // and then call isSorted on the rest of the array
  if (arr[0] <= arr[1]) {
    return isSorted(arr.slice(1));
  } else {
    return false;
  }
}

// Here's how this function works:

// If the input array has 0 or 1 elements, it's always considered sorted, so we return true as a base case.
// If the input array has more than 1 element, we check if the first two elements are in order.If they are, we call isSorted on the rest of the array(i.e.all the elements except the first one).If they're not in order, we know the array is not sorted, so we return false.
// The recursive case eventually leads to an array with 0 or 1 elements, which we've already established is sorted, so we return true.
// This function uses the slice method to create a new array that starts at the second element of the input array and goes to the end.This is because we're only checking the first two elements at a time, so we need to exclude the first element from the subarray we pass to isSorted.

// Note that this implementation assumes that the input array only contains comparable elements(e.g.numbers or strings).If you're working with an array of objects, you might need to modify this implementation to compare the elements based on a specific property or method.

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
