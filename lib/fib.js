// Write a function that accepts a number (number)
// and returns the value of the Fibonacci number
// in that position in the list
// the Fibonacci numbers follow this pattern:

// fib(0) => 0
// fib(1) => 1
// fib(n) => fib(n-1) + fib(n-2)


function fib(n) {
  if(n === 0) {
    return n;
  }
  if(n === 1) {
    return n;
  }
  n = (n - 1) + (n - 2);
  return n;
}

module.exports = fib;
