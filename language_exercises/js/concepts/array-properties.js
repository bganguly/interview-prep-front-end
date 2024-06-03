/*
array for each/map/filter/reducer
*/

const inputArray = [-3,-2,-1,0,1,2,3]

inputArray.forEach( element => {
  console.log('using for each :', element, element ** 0.5)
});

const outputUsingMap = inputArray.map( element => {
  return element ** 0.5
});
console.log('using Map :',outputUsingMap)

const outputUsingFilter = inputArray.filter( element => {
  return element > 0
});
console.log('using Filter :', outputUsingFilter)

const outputUsingReduce = inputArray.reduce( (a,b) => {
  return Math.abs(a) + Math.abs(b);
})
console.log('using Reduce :', outputUsingReduce)

const outputArrayMin1 = Math.min.apply(null,inputArray)
const outputArrayMin2 = Math.min(...inputArray)
console.log('using Min :', outputArrayMin1, outputArrayMin2)
