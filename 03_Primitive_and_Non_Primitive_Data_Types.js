// Primitive Data types in Java Script
// nn bb ss u
// null number boolean bigint string symbol undefined

let a = null;
let b = 345;
let c = true;
let d = BigInt("500");
let e = "kaushik";
let f = Symbol("I am a nice Symbol");
let g = undefined;

let h = 3.998;


// Object - Non  Primitive Data types in Java Script

console.log(a,b,c,d,e,f,g,h);
console.log(typeof a,typeof b,typeof c,typeof d,typeof e,typeof f,typeof g,typeof h);

const empinfo = {
    "firstname" : "Kaushik",
    lastname:"Bhosale",
    "dept" : "Front End Develeoper",
    "city" : "Mumbai",
    99 : 1999
};

console.log(empinfo["firstname"]); // Kaushik
console.log(empinfo.lastname);     // Bhosale
console.log(empinfo.firstname);    // Kaushik
console.log(empinfo["99"]);        // 1999
console.log(empinfo[99]);          // 1999
console.log(empinfo);              // Entire Object
console.log(typeof empinfo);       // object