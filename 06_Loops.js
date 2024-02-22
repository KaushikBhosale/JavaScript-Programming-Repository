// Loops 
let obj = {
    aryan : 45,
    kaushik : 90,
    anmol : 67,
    chinmay : 77,
    kushal : 88
};

for (let key in obj) {
    console.log("The Marks of " + key + "\t:\t" + obj[key]);
}
for (let value of "Array Bhai") {
    console.log(value);
}

let i = 0;
while(i<=10){
    console.log(i+1);
    i++
}

console.log("While Loop");
do {
    console.log(i+1);
    i++
} while (i<9);
console.log("Out Of Loops");

