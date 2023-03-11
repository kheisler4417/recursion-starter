/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:

fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(10); // 55
***********************************************************************/

// Sure! Here's a recursive solution for the fibonacci function:

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// This solution works by checking if n is less than or equal to 1, and returning
// n in that case.Otherwise, it recursively calculates the(n - 1)th and
//   (n - 2)th numbers in the sequence and adds them together to get the nth
// number.

// Note that this solution is simple and easy to understand, but it can be
// quite slow for large values of n since it will end up computing many of the same
// values multiple times.A more efficient solution would be to use dynamic programming
// to memoize the results of each computation so that they can be reused later.

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = fibonacci;
} catch (e) {
  module.exports = null;
}
