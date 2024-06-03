/*
Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

given A = [1, 3, 6, 4, 1, 2], the function should return 5.
Given A = [1, 2, 3], the function should return 4.
Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

input [1,2,3,6,1] should yield  4
input [1,2,3] should yield  4
input [-1, -3] should yield 1
*/

// own naive solution
const findSmallestPositive = inputArray => {

  const positiveIntsInInput = inputArray.filter( eachVal => {
    return eachVal >= 1
  })

  if (positiveIntsInInput.length === 0 ) {
    return 1;
  } else if (positiveIntsInInput.length === 1) {
    return (positiveIntsInInput[0] < 1 || positiveIntsInInput[0] > 1) ? 1 : 2
  } else {
    const minOfInput = Math.min.apply(null,positiveIntsInInput)
    // if the minimum of array is greater than 1, return 1
    if (minOfInput > 1 ) {
      return 1
    } else {
      // sort array
      const sortedArray= positiveIntsInInput.sort()
      // if any consecutive 'gap' is greater  than 1, find missing
      // value closest to smaller, add 1, and return
      let gapGreaterThanOneFound = false
      for (let i=0; i < sortedArray.length - 1; i++) {
        if (sortedArray[i+1] - sortedArray[i] > 1) {
          gapGreaterThanOneFound = true
          return sortedArray[i] +1;
        }
      }
      // if no consecutive gap is greater than 1, add 1 to last value
      // and return
      if (gapGreaterThanOneFound === false) {
        return sortedArray[sortedArray.length - 1] + 1
      }
    }
  }

}

/*
input [1,2,3,6,1] should yield  4
input [1,2,3] should yield  4
input [-1, -3] should yield 1
*/
//  console.log('[1,2,3,6,1] ',findSmallestPositive([1,2,3,6,1]))
//  console.log('[1,2,3] ', findSmallestPositive([1,2,3]))
//  console.log('[-1, -3] ', findSmallestPositive([-1,-3]))
//  console.log('[-3,1] ', findSmallestPositive([-3,1]))
//  console.log('[-3,1,-4,2] ', findSmallestPositive([-3,1,-4,2]))
//  console.log('[-3,1,-4,3] ', findSmallestPositive([-3,1,-4,3]))
//  console.log('[-3,3,-4,7] ', findSmallestPositive([-3,3,-4,7]))

 // much better - https://stackoverflow.com/a/51720006 - discuss time/space
 // anything not-in is generally based solved via a set approach

const findSmallestPositiveUsingSet = inputArray => {

  const positiveIntsSet = new Set();
  inputArray.forEach( eachVal => {
    if ( eachVal >= 1) {
      positiveIntsSet.add(eachVal)
    }
  })
  // middle expression , with the +1, returns 4 when set is {1,2,3}
  for (let i = 1; i <= positiveIntsSet.size +1 ; i++) {
    if ( ! positiveIntsSet.has(i))   {
        return i;
    }
  }
}

/*
input [1,2,3,6,1] should yield  4 because that is the smallest positive int not present
input [1,2,3] should yield  4
input [-1, -3] should yield 1 because the minimum positive expected is always 1
*/
console.log('[] === 1 |  ', findSmallestPositiveUsingSet([]) === 1)
console.log('[1,2,3] === 4 |  ', findSmallestPositiveUsingSet([1,2,3]) === 4)
console.log('[-1, -3] === 1 |  ', findSmallestPositiveUsingSet([-1,-3]) === 1)
console.log('[-3,1] === 2 |  ', findSmallestPositiveUsingSet([-3,1]) === 2)
console.log('[-3,2] === 1 |  ', findSmallestPositiveUsingSet([-3,2]) === 1)
console.log('[-3,1,-4,2] === 3 |  ', findSmallestPositiveUsingSet([-3,1,-4,2]) === 3)
console.log('[-3,1,-4,3] === 2 |  ', findSmallestPositiveUsingSet([-3,1,-4,3]) === 2)
console.log('[-3,3,-4,7] === 1 |  ', findSmallestPositiveUsingSet([-3,3,-4,7]) === 1)
console.log('[1,2,3,6,1] === 4 | ',findSmallestPositiveUsingSet([1,2,3,6,1]) === 4)