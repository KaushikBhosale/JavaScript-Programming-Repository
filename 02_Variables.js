// JS is dynamically typd language 
// as a variable can be changed to another data type in a runtime 
// on other hand in c and java it is not possible it is statically typed language

var a=12;
console.log(a);
var a="Kaushik Bhosale";
console.log(a);

d=12111;
console.log(d);
d="Kaushik Bhosale From Mumbai";
console.log(d);

//  var , let & const


// var
var a = 11;
var a = "Kaushik";
var a = null;
var a = undefined; /** or */ var a;


// let
let b = 99;
console.log(b);

// let b = "Hello World"; let variable cannot be redeclared

b = "Hello World";
console.log(b); // outside the scope

{
    let b = "block level"
    console.log(b); // in the scope
}
console.log(b);  // outside the scope

// const 

const c = "JavaScript Course";
// c = "Heloo" const cannot be changed or redaclared
// const cc; // Must be Innitialed while declaration

