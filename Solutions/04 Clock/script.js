/* Exercise 4: Clock

Create a  Digital Seconds Clock of Using setInterval & Date Object.
Date Object can be used to get the date, time, hours & seconds which can be updated using setinterval.

let a = new Date();
let h = a.getHours();
let m = a.getMinutes();
let s = a.getSeconds();
let d = a.getDate();
console.log(h, m, s, d);

*/

// **********************************************************************************************
// **********************************************************************************************


setInterval(() => {
    let a = new Date();
    time.innerHTML = a;
}, 1000);