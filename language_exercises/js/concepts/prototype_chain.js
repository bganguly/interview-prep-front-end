// *** begin Section A *****
// given a 'parent' function and a 'child' function- demo inheritance

// setup two 'constructors'
var parent_func = function() {
  this.parent_property = 'parent';
  this.parent_method = function() {
    return 'inside parent_method';
  }
}
var child_func = function() {
  this.child_property = 'child';
  this.child_method = function() {
    return 'inside child_method';
  }
}

// create instances
var parent_obj , child_obj;
parent_obj = new parent_func();
child_obj = new child_func();

// assert that child does not have parent properties
console.log(typeof child_obj.child_property !== 'undefined'); // true
console.log(typeof child_obj.parent_property === 'undefined'); // true

// link prototype
child_func.prototype = new parent_func();
// deep dive 
// why/is new function_name() needed? 
// what about just new function_name ? 
// what about just parent_func, without any new-ing ?
// what if r.h.s is shortened to 
// {
//    parent_property : 'parent ,
//    parent_method : function () {
//      return 'inside child_method';
//    }
// }
child_obj = new child_func();
// deep dive - why is this step needed? doesn't the existing child_obj
// created before the proprtotype chaining automagically get the parent
// attrs ?

// check inherited properties
console.log(typeof child_obj.child_property !== 'undefined'); // true
console.log(typeof child_obj.parent_property === 'undefined'); // false

// bonus: check object constructor references
console.log( child_obj.constructor === child_func); // false
console.log(parent_obj.constructor === parent_func); // true
// reset to normally expected constructor references
child_func.prototype.constructor = child_func;
// check object constructor references again
console.log( child_obj.constructor === child_func); // true
console.log(parent_obj.constructor === parent_func); // true

// *** begin Section B *****
// bonus: demo other ways of newly created instances all 'automagically'
// receiving properties/methods from 'some ancestor'
var placeholder_func = function() {

}
var placeholder_obj_01 = new placeholder_func();
console.log(typeof placeholder_obj_01.some_property === 'undefined'); // true
placeholder_func.prototype = new function() {
  this.some_property = 'some_value';
}
var placeholder_obj_02 = new placeholder_func();
var placeholder_obj_03 = new placeholder_func();
// below returns true - (instance was created before chaining prototype)
console.log(typeof placeholder_obj_01.some_property === 'undefined'); // true 
// below returns false - (instances were created after chaining prototype)
console.log(typeof placeholder_obj_02.some_property === 'undefined'); // false
console.log(typeof placeholder_obj_03.some_property === 'undefined'); // false

// *** begin Section C *****
// bonus: demo running the constructor for another function-
// even as many properties/methods come from 'some ancestor'
var placeholder_super_func = function() {
  this.super_property = 'foo';
}
var placeholder_normal_func = function() {
  placeholder_super_func.call(this);
}
var placeholder_normal_obj_01 = new placeholder_normal_func();
console.log(typeof placeholder_normal_obj_01.some_property === 'undefined'); //true
placeholder_normal_func.prototype = new function() {
  this.some_property = 'some_value';
}
var placeholder_normal_obj_02 = new placeholder_normal_func();
var placeholder_normal_obj_03 = new placeholder_normal_func();
// below returns true - (instance was created before chaining prototype)
console.log(typeof placeholder_normal_obj_01.some_property === 'undefined'); // true 
// below returns false - (instance creation calls 'super')
console.log(typeof placeholder_normal_obj_02.super_property === 'undefined'); // false
console.log(typeof placeholder_normal_obj_03.super_property === 'undefined'); // false