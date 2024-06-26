/*
demo array forEach/map/filter/reduce/Min
*/

const inputArray = [-3,-2,-1,0,1,2,3]

// demo forEach
inputArray.forEach( element => {
  // trying to get square root. negative numbers in input will return NaN
  console.log('using for each :', element, element ** 0.5)
});
console.log()

// demo Array.map
const outputUsingMap = inputArray.map( element => {
  return element ** 0.5
});
console.log('using Map :',outputUsingMap)
console.log()

// demo Array.filter
const outputUsingFilter = inputArray.filter( element => {
  return element > 0
});
console.log('using Filter :', outputUsingFilter)
console.log()

// demo Array.reduce
const outputUsingReduce = inputArray.reduce( (a,b) => {
  return Math.abs(a) + Math.abs(b);
})
console.log('using Reduce :', outputUsingReduce)
console.log()

// demo calling Math.min on an array object 
// (Math.min/max take an enumerated list or multiple args. passing an array ref will not work)
// below will return NaN
const outputArrayMin1 = Math.min(inputArray)
// (Math.min/max - for an array- other ways)
const outputArrayMin2 = Math.min(...inputArray)
const outputArrayMin3 = Math.min.apply(null,inputArray)
const outputArrayMin4 = Math.min.call(null,...inputArray)
console.log('using Min :', outputArrayMin1, outputArrayMin2, outputArrayMin3, outputArrayMin4)
