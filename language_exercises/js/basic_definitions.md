**=> Company A**   

React:  
- Discuss  
-- first order (? careful) / first class function  
-- pure functions  
-- higher order functions | higher order components   
-- Hint: read about these but also be aware of current search results of these vs 
the component discussions (that is mdn vs reactjs docs)
- general props vs state questions
- discuss routing  
-- Hint: be aware of how this has evolved over the years
- discuss trends in state management as seen from docs  
-- Hint: need to know current 'stance'/philosophy of any necessity of using redux 
from both react's point of view as well as redux's

JS:
- event loop  
-- Hint: what is unusual (if anything) relative to other laguages  
- variable scope and resolution  
-- Hint: Discuss local/global/shadowing (old school definitions)

**=> Company B**     

React:  
- Discuss higher order components
- general props vs state questions
- syntax to create component
- syntax to alter state
- discuss routing  

**=> Company C**     

JS: 
- variable scope and resolution  
-- discuss var vs let - https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var
- how do you do a deep copy of an object (what might be a bug ?)
-- the above is some old BS - circa 2016- https://stackoverflow.com/questions/40291987/javascript-deep-clone-object-with-circular-references
- ever had memory 'leaks' in js (poorly worded- likely refers to the old school concern about dom and js circular references)

**=> General questions**

data structures:  
- big o summary - https://www.bigocheatsheet.com/  
- discuss space/time complexity of sorting array of  unordered integers  
- discuss space/time complexity of finding the index of some value (search operation)  
-- when array is ordered  
-- when array is unordered  
- discuss sorting an array when values are bounded (say we know that each
value is limited to be a positive integer upto 50, but that the array itself is of size n)  
-- discuss space/time complexity - https://www.techiedelight.com/efficiently-sort-array-duplicated-values/

React
- can props be set from state etc
- how to pass state from parent to child component
- how to pass state from child to parent
- lifecycle cheat sheet - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

DOM APIs and concepts:
- Shadow dom and references/usage in react vs angular  
-- Hint: need to know current state of official documentation on both frameworks plus MDN  

Semver:
- discuss concepts  
-- Hint: pay attention to sub-unity major versions

Garbage collection:
- discuss mark and sweep (or newer) GC algorithms

RESTFul apis
- discuss general concepts
