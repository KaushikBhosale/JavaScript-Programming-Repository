/* Exercise 7:

Create a JavaScript program capable of generating a password which contains atleast one lowercase,
one uppercase and one special character. Create a password class to acheive the same.

Example :
class Password:
    this.password
    generateStrongPassword()
    generateWeakPassword()
    generateSuperStrongPassword()
    generateFunnyPassword()

*/
// **********************************************************************************************
// **********************************************************************************************

class Password {
    constructor() {
        console.log("Welcome to Pasword Genrator");
        this.pass = "";
    }

    genaratePassword(len) {
        let character = "qwertyuiopasdfghjklzxcvbnm";
        let numbers = "1234567890";
        let special = "!@#$%^&*()";
        if (len < 3) {
            console.log("Your Password Lenght Should Be 3");
        } else {
            let i = 0;
            while (i < len) {
                this.pass += character[Math.floor(Math.random() * character.length)];
                this.pass += numbers[Math.floor(Math.random() * numbers.length)];
                this.pass += special[Math.floor(Math.random() * special.length)];
                i += 3;
            }
        }
        return this.pass.substr(0,len);
    }
}

let p = new Password();
console.log(`Password Genrator is : ${p.genaratePassword(7)}`);

submit.addEventListener("click", (e) => {
    e.preventDefault();
    let a = passlen.value;
    passw.innerHTML = `Password Genrator is : <h3>${p.genaratePassword(a)}</h3>`;
})

