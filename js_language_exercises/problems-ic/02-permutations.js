/*
 given a string - print all permutations
 */

 // originally from  - https://www.interviewcake.com/question/javascript/recursive-string-permutations?course=fc1&section=dynamic-programming-recursion

 const  getPermutations =  string => {

  // Base case
  if (string.length <= 1) {
    return new Set(string);
  } else {
    const allCharsExceptLast = string.slice(0, -1);
    // Recursive call: get all possible permutations for all chars except last
    const permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);
  
    // Put the last char in all possible positions for each of the above permutations
    const lastChar = string[string.length - 1];
    return getPermutationSet(lastChar, allCharsExceptLast, permutationsOfAllCharsExceptLast );
  }
}

const getPermutationSet = (lastChar, allCharsExceptLast, permutationsOfAllCharsExceptLast) => {
  // console.log(new Date(), 'string', string, 'permutationsOfAllCharsExceptLast', permutationsOfAllCharsExceptLast);
  const permutations = new Set();
  permutationsOfAllCharsExceptLast.forEach(eachPermutation => {
    for (let position = 0; position <= allCharsExceptLast.length; position++) {
      const permutation = eachPermutation.slice(0, position) + lastChar + eachPermutation.slice(position);
      permutations.add(permutation);
    }
  });
  // console.log(new Date(),  'string', string,'permutationsInclLastChar', permutations);
  return permutations;
}

const inputStr = 'cat'
console.log('inputStr : ',inputStr)
console.log(getPermutations(inputStr))
 