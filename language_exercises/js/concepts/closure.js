// demo that same function when called multiple times
// returns different values
var closure = function() {
  var initialVal = 0;
  return function() {
    return ++initialVal;
  }
}
var result = closure();
console.log(result()) //1
console.log(result()) //2

// demo that same function when called multiple times
// with different valus, 'remembers' last result and
// returns different values
var closure = function (incrementVal) {
  return function(input) {
    return input + incrementVal;
  }
}
var result = closure(6);
console.log(result(10)) //16
console.log(result(11)) //17

// the two settimeout demos below will interleave as no promises or callbacks are in use
// demo how to use settimeout to return
// different values - incorrect demo
var loopCounter = 3;
var closureWithSetttimeoutIncorrect = function() {
  for (var i = 0; i < loopCounter; i++) {
    setTimeout(function() { 
      console.log('closureWithSetttimeoutIncorrect', i);
    }  , 500 + i);
  }
}
closureWithSetttimeoutIncorrect();

// demo how to use settimeout to return
// different values - correct demo 
var closureWithSetttimeoutCorrect = function() {
  for (var i = 0; i < loopCounter; i++) {
      setTimeout(function(i) { 
          return function() {console.log('closureWithSetttimeoutCorrect',i)}; 
      }(i), 500 + i);
  }
}
closureWithSetttimeoutCorrect();

// CAUTION: these need to be run in chrome dev console or similar. 
// Node runtime wont find `document`` (if run from vscode)
if (typeof document === 'undefined') {
  console.log('skipping several function call that rely on `document` being available in scope')
  return
}
// demo how to use closure to correctly bind
// right dom elements
var closureWithDomElements = function() {
  var elements = document.getElementsByTagName('pre');
  for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', (function(i) {
        return function() {console.log(elements[i].innerHTML)}
      })(i))
  }
}
closureWithDomElements();

// demo how to use closure to correctly bind
// right dom elements using let
var closureWithDomElements = function() {
  var elements = document.getElementsByTagName('pre');
  for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', function() {
        return function() {console.log(elements[i].innerHTML)}
      })
  }
}
closureWithDomElements();