// String

let a = "Kaushik";
console.log(a);

a = 'Bhosale'; // Also can store in single quotes
console.log(a);

console.log(a.length); // Gives the lenght of string

let b = "Chinamay";

let ab = `"a" and "b" are freinds` // Template Literals

console.log(ab);
ab = `${a} and ${b} are freinds`; // String interpolation
console.log(ab);


console.log(a.toUpperCase);
console.log(a.toLowerCase);
console.log(a.slice(1));
console.log(a.slice(0,3));
console.log(a.replace("B","D"));

b="Kaushik";
console.log(a + " this is a ");
let c = a.concat(" ",b);
console.log(c);
console.log(b.includes("x"));
console.log(a,"Unchanged");
