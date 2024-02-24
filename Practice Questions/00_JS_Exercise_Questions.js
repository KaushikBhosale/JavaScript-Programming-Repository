/*  Exercise 1: Guess The Number

Prize Amount: Rs 500 Amazon voucher
let number = 0 // Generate random number here
let chances = 0
Keep asking for the number until the correct number is guessed
Increment the chances variable

Eventually after the game is over, display the (100 - Number of chances) and the actual number 

*/

/* Exercise 2: Rock Paper & Scissors Game

// Create Rock Paper & Scissors Game in JavaScript.
// The game should ask you to enter r, p or s.
// The computer should be able to randomly generate r, p or s and declare win or loss using alert
// Use alert, prompt and confirm whereever required!

*/

/* Exercise 3: Tell Me a Joke

elem.innerHTML is used to populate a div with html.
Search online about this method and create a website with a <div> tag containing
a random joke! Given an Array of Jokes.
Use Math.random and fetch jokes
Your Website should show a random joke on every reload.
Note : Mininmum lenght of your jokes array should be 10 

Array of Jokes From Internet
****************************

let jokes =[`What do kids play when their mom is using the phone? Bored games.`,
`What do you call an ant who fights crime? A vigilANTe!`,
`Why are snails slow? Because they’re carrying a house on their back.`,
`What’s the smartest insect? A spelling bee!`,
`What does a storm cloud wear under his raincoat? Thunderwear.`,
`What is fast, loud and crunchy? A rocket chip.`,
`How does the ocean say hi? It waves!`,
`What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates.`,
`Why did the teddy bear say no to dessert? Because she was stuffed.`,
`Why did the soccer player take so long to eat dinner? Because he thought he couldn’t use his hands.`,
`Name the kind of tree you can hold in your hand? A palm tree!`,
`What do birds give out on Halloween? Tweets.`,
`What has ears but cannot hear? A cornfield.`,
`What’s a cat’s favorite dessert? A bowl full of mice-cream.`,
`Where did the music teacher leave her keys? In the piano!`,
`What did the policeman say to his hungry stomach? “Freeze. You’re under a vest.”`,
`What did the left eye say to the right eye? Between us, something smells!`,
`What do you call a guy who’s really loud? Mike.`,
`Why do birds fly south in the winter? It’s faster than walking!`,
`What did the lava say to his girlfriend? “I lava you!”`,
`Why did the student eat his homework? Because the teacher told him it was a piece of cake.`,
`What did Yoda say when he saw himself in 4k? HDMI.`,
`Which superhero hits home runs? Batman!`,
`What’s Thanos’ favorite app on his phone? Snapchat.`,
`Sandy’s mum has four kids; North, West, East. What is the name of the fourth child? Sandy, obviously!`,
`What is a room with no walls? A mushroom.`,
`Why did the blue jay get in trouble at school? For tweeting on a test!`,
`What social events do spiders love to attend? Webbings.`,
`What did one pickle say to the other? Dill with it.`,
`What is brown, hairy and wears sunglasses? A coconut on vacation.`,
`Why is a football stadium always cold? It has lots of fans!`,
`What did one math book say to the other? “I’ve got so many problems.”`,
`What did the Dalmatian say after lunch? That hit the spot!`,
`What do you call two bananas on the floor? Slippers.`,
`Why did the chicken cross the playground? To get to the other slide.`,
`Why do ducks have feathers on their tails? To cover their butt quacks.`,
`How does a vampire start a letter? “Tomb it may concern…”`,
`A plane crashed in the jungle and every single person died. Who survived? Married couples.`,
`What kind of math do birds love? Owl-gebra!`,
`Why can’t you ever tell a joke around glass? It could crack up.`,
`What do you call a Star Wars droid that takes the long way around? R2 detour.`,
`How do you stop an astronaut’s baby from crying? You rocket.`,
`Why did the scarecrow win a Nobel prize? Because she was outstanding in her field.`,
`How do you know when a bike is thinking? You can see their wheels turning.`,
`Why was 6 afraid of 7? Because 7,8,9.`,
`What goes up and down but doesn’t move? The staircase.`,
`What kind of shoes do frogs love? Open-toad!`,
`How did the baby tell his mom he had a wet diaper? He sent her a pee-mail.`,
`What is a witch’s favorite subject in school? Spelling.`,
`What’s brown and sticky? A stick.`,
`Why do ducks always pay with cash? Because they always have bills!`,
`How did Benjamin Franklin feel holding his kite when he discovered electricity? Shocked!`,
`When does a joke become a “dad” joke? When the punchline is a parent.`,
`How much did the man sell his dead batteries for? Nothing, they were free of charge!`,
`Where do most horses live? In neighhh-borhoods!`,
`Why did the Daddy Rabbit go to the barber? He had a lot of little hares.`,
`How do you make a lemon drop? Let it fall from the tree.`,
`Why can’t you ever trust atoms? Because they make up everything.`,
`Which planet loves to sing? Nep-tune!`,
`What’s a private investigator’s favorite shoe? Sneak-ers.`,
`What did the limestone say to the geologist? Don’t take me for granite!`,
`If an electric train is traveling south at 10 miles per hour and the wind is blowing North at 10 miles per hour, which way does the smoke blow? Fooled you! Electric trains don’t blow smoke.`,
`Why are basketball courts always wet? Because the players dribble.`,
`How do billboards talk? Sign language.`,
`What do you call a duck that gets good grades? A wise quacker.`,
`What do you call a fish without an eye? A fsh.`,
`What kind of keys are sweet? Cookies!`,
`What board game does the sky love to play? Twister.`,
`Why does a seagull fly over the sea? Because if it flew over the bay, it would be a baygull.`,
`What do you call a tired bull? A bulldozer.`,
`What do you call cheese that belongs to someone else? Nacho cheese!`,
`Why are pizza jokes the worst? They’re too cheesy.`,
`What kind of water cannot freeze? Hot water.`,
`Why was the belt arrested? Because it was holding up some pants.`,
`Why did the peanut get into a rocket? He wanted to be an astro-nut!`,
`Did you hear the joke about the roof? Never mind, it would go over your head.`,
`Why did the cookie go to the hospital? Because it was feeling a little crummy.`,
`What did the ghost call his Mum and Dad? His transparents.`,
`What fruit do twins love? Pears!`,
`What time is it when people are throwing pieces of bread at your head? Time to duck.`,
`Why was the baby strawberry crying? Because their parents were in a jam.`,
`Why don’t you ever see giraffes in middle school? Because they’re all in high school.`,
`How do bees brush their hair? With honeycombs!`,
`What do you do if someone rolls their eyes at you? Roll them right back.`,
`What did the Baby Corn say to the Mama Corn? “Where is Pop Corn?”`,
`What gets wetter the more it dries? A towel.`,
`Why won’t peanut butter tell you a secret? He’s afraid you’ll spread it!`,
`What’s the difference between a car and a fish? You can tune a car but you can’t tuna fish.`,
`What is worse than raining cats and dogs? Hailing taxis.`,
`What do you call an old snowman? A glass of water.`,
`Who eats snails? People who don’t like fast food!`,
`What did the bathtub say to the toilet? “You look flushed!”`,
`How much does it cost a pirate to get his ears pierced? A buck an ear.`,
`What was a more useful invention than the first telephone? The second telephone.`,
`Why did the banana visit the doctor? She wasn’t peeling well!`,
`What’s a snake’s favorite subject in school? Hiss-tory.`,
`How do you talk to a giant? Use big words.`,
`What did the bald man say when he received a comb for his birthday? “I’ll never part with this!”`,
`Why did the computer get sick? It caught a viru`]

*/

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

/* Exercise 5: Hackerman

Write a javascript program to pretend to look like a hacker
Try to emulate a terminal using javascript logic and it should look to others as if you are hacking a system
Try to display messages like:
        Initializing Network
        Connecting to service...
        Retreiving username...
        Username found....
        Trying a combination of 4.5 Trillion passwords...
        Password found...
        Connecting to Facebook...

Fool your friends into thinking that you are a hacker and have fun
PROTIP: Try to use a green text on a black background

*/

/* Exercise 6: ToDo List

Create a TODO list app capable of storing your Todos in localStorage.
Add an option to Create, Deleteand access all the Todos.
Try to make UI as good as possible

*/

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

/* Exercise 8:

The HTML AudioElement Interface can be used to play audio in the browser.
Create an alarm clock which display time and plays sound at a user specified time


function play() {
  let audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
  audio.play();
}


setTimeout(() => {
  play()
}, 12000)

*/