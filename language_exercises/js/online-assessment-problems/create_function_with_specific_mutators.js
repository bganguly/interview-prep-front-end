/*
given a function object, that can store strings and 
supports an add/remove and getList operation as described below.
add should only add new string
remove should remove from collection
getlist should return array of current strings, in the same order, as they 
were inserted in
objectInstance.add('shirt')
objectInstance.add('pant')
objectInstance.getList() // should return ['shirt,'pant']

*/

// fat arrows do not work for constructors in es6
const dresses01 = /* () => */function() {
  const arrayOfDresses = []
  const isDressInCollection = inputDress => {
    return arrayOfDresses.some((existingDress) => {
      return existingDress === inputDress
    }) 
  }
  const addDress = inputDress => {
    if ( ! isDressInCollection(inputDress)) {
      arrayOfDresses.push(inputDress)
    }
  }
  const removeDress = inputDress => {
    arrayOfDresses.forEach((existingDress, index) => {
      if (existingDress === inputDress) {
        arrayOfDresses[index] = null
        return
      }
    }) 
  }
  const getListOfDresses = () => {
    return arrayOfDresses.filter( dress => dress)
  }
  this.add = dress => {
    addDress(dress)
  }
  this.remove = dress => {
    removeDress(dress)
  }
  this.getList = () => {
    return getListOfDresses()
  }
}

let dressObject = new dresses01();
dressObject.add('shirt')
dressObject.add('shirt')
dressObject.add('pant')
console.log(dressObject.getList())
dressObject.remove('shirt')
console.log(dressObject.getList())

// standard function approach
function dresses02 () {
  const arrayOfDresses = []
  const isDressInCollection = inputDress => {
    return arrayOfDresses.some((existingDress) => {
      return existingDress === inputDress
    }) 
  }
  const removeDress = inputDress => {
    arrayOfDresses.forEach((existingDress, index) => {
      if (existingDress === inputDress) {
        arrayOfDresses[index] = null
        return
      }
    }) 
  }
  this.add = dress => {
    if ( ! isDressInCollection(dress)) {
      arrayOfDresses.push(dress)
    }
  }
  this.remove = dress => {
    removeDress(dress)
  }
  this.getList = () => {
    return arrayOfDresses.filter( dress => dress)
  }
}

dressObject = new dresses02();
dressObject.add('shirt')
// console.log(dressObject.getList())

// class based  approach
class dresses03 {
  constructor () {
    const arrayOfDresses = []
    const isDressInCollection = inputDress => {
      return arrayOfDresses.some((existingDress) => {
        return existingDress === inputDress
      }) 
    }
    const removeDress = inputDress => {
      arrayOfDresses.forEach((existingDress, index) => {
        if (existingDress === inputDress) {
          arrayOfDresses[index] = null
          return
        }
      }) 
    }
    this.add = dress => {
      if ( ! isDressInCollection(dress)) {
        arrayOfDresses.push(dress)
      }
    }
    this.remove = dress => {
      removeDress(dress)
    }
    this.getList = () => {
      return arrayOfDresses.filter( dress => dress)
    }
  }
}

dressObject = new dresses03();
dressObject.add('shirt')
dressObject.add('pant')
console.log(dressObject.getList())
dressObject.remove('shirt')
console.log(dressObject.getList())