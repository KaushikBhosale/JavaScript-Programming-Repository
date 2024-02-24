/* Exercise 5: Hackerman

Write a javascript program to pretend to look like a hacker
Try to emulate a terminal using javascript logic and it should look to others as 
if you are hacking a system.

Try to display messages like:

        `Initializing Network`,
        `Connecting to service...`,
        `Retreiving username...`,
        `Username found....`,
        `Trying a combination of 4.5 Trillion passwords...`,
        `Password found...`,
        `Connecting to Facebook...`

Fool your friends into thinking that you are a hacker and have fun
PROTIP: Try to use a green text on a black background

*/
// **********************************************************************************************
// **********************************************************************************************

let a = [
    `Initializing Hacktool`,
    `Mobile Number 8677589798...`,
    `Connecting to Gmail...`,
    `Connecting to Whatsup...`,
    `Connecting to Facebook...`,
    `Connecting to Instagram...`,
    `Connecting to server1...`,
    `Connecting failed. Retryieng..`,
    `Connecting to server2...`,
    `Connected Successfully...`,
    `Retreiving username...`,
    `Username found....`,
    `Username sahjkumar`,
    `Trying a combination of 4.5 Trillion passwords...`,
    `653 Password tried...`,
    `Match Not Found...`,
    `Another 432 Password tried...`,
    `Match Not Found...`,
    `Another 723 Password tried...`,
    `Password found...`,
    `Accessing Account ...`,
    `sahajkumar Accessed Successfully`,
]



const sleep=async(seconds)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(true)
        }, seconds*1000);
    });
};
const showHack= async(message)=>{
    await sleep(2);
    // console.log(message);
    text.innerHTML=text.innerHTML + message + "<br>"
};

(async()=>{
for (let i = 0; i < a.length; i++) {
    await showHack(a[i]);
}
})();