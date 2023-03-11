/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// To calculate all permutations of an array, we can take the first element and swap it with each of the remaining elements, and then recursively calculate the permutations of the remaining elements.

// Here's one way to implement this in JavaScript:

function permutations(array) {
  if (array.length <= 1) {
    return [array];
  }

  const first = array[0];
  const rest = array.slice(1);

  const permsWithoutFirst = permutations(rest);
  const allPerms = [];

  for (let i = 0; i < permsWithoutFirst.length; i++) {
    const perm = permsWithoutFirst[i];

    for (let j = 0; j <= perm.length; j++) {
      const newPerm = perm.slice(0, j).concat([first]).concat(perm.slice(j));
      allPerms.push(newPerm);
    }
  }

  return allPerms;
}

// Here's how the function works:

// If the array has length 0 or 1, there's only one permutation (the array itself), so we return an array containing the array.
// Otherwise, we take the first element(first) and the remaining elements(rest).
// We recursively calculate all the permutations of rest, which gives us an array of arrays(permsWithoutFirst).
// We then loop through each permutation in permsWithoutFirst, and for each permutation, we insert first at each possible position in the array, creating a new permutation(newPerm).We push each new permutation to a new array(allPerms).
// Once we've looped through all permutations, we return allPerms.
// This function has a time complexity of O(n!), since we're generating n! permutations.

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
