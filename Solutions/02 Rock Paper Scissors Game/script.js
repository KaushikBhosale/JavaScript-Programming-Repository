// Create Rock Paper & Scissors Game in JavaScript.
// The game should ask you to enter r, p or s.
// The computer should be able to randomly generate r, p or s and declare win or loss using alert
// Use alert, prompt and confirm whereever required!

// **********************************************************************************************
// **********************************************************************************************

let user = prompt("Enter r, p or s");
let computerInput = Math.floor(Math.random() * 3);
let computer = ["r", "p", "s"][computerInput];

const match = (computer, user) => {
    if (computer === user) {
        return "It's a Tie";
    }
    else if (computer === "r" && user === "p") {
        return "user";
    }
    else if (computer === "r" && user === "s") {
        return "Computer";
    }
    else if (computer === "p" && user === "r") {
        return "Computer";
    }
    else if (computer === "p" && user === "s") {
        return "user";
    }
    else if (computer === "s" && user === "r") {
        return "user";
    }
    else if (computer === "s" && user === "p") {
        return "Computer";
    }
}

let res  = match(computer, user);

document.write("<h2>As Computer = " + computer + " & user = " + user + "<br>So the Winner is : " + res + "</h2>");