/*
given a positive integer n
print, on a new line for each int <= n,
- fizz if divisible by 3
- buzz if divisible by 5
- fizzbuzz if divisible by 15
- the integer itself if none of the above occur
*/

const printFizzBuzz = n => {
  for (let i=1; i<=n; i++) {
    console.log(getValue(i))
  }
}

const getValue = i => {
  let output
  if (i % 15 === 0) {
    output= 'FizzBuzz'
  } else if (i % 3 === 0) {
    output = 'Fizz'
  } else if (i % 5 === 0) {
    output = 'Buzz'
  } else {
    output = i
  }
  return output
}

printFizzBuzz(31)
