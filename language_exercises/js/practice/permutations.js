// cats
// - > process cat recursively, put 's' in all possible places inside/around 'cat'
// - > process ca recursively, put 't' in all possible places inside/around 'ca'

const getPermutations = inputStr => {
  if (inputStr.length <= 1) {
    return new Set(inputStr)
  } else {
    const allButLastChar = inputStr.slice(0, inputStr.length - 1)
    const recursivePermutations = getPermutations(allButLastChar)
    // do other processing
    const lastChar = inputStr.slice(inputStr.length - 1)
    return updateRecursivePermutations (lastChar, recursivePermutations)
  }
}

const updateRecursivePermutations = (lastChar, recursivePermutations) => {
  const updatedPermutations = new Set()

  recursivePermutations.forEach(eachPermutation => {
    // note the <= comparison (needed to fully scan in eachPermutation and
    // append at end)
    for (let i=0; i<= eachPermutation.length; i++) {
      updatedPermutations.add(
        eachPermutation.slice(0, i)
        + lastChar
        + eachPermutation.slice(i)
      )
    }
  })
  return updatedPermutations
}

console.log(getPermutations('cat'))