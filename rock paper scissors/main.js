const choices = ["rock" , "paper" , "scissors" ];
const userChoice = prompt("choose rock , paper , scissors:");


    if (userChoice) {
        console.log (`Your choice is ${userChoice}`)
    } else {
        console.log ("You cheated")
    }
const randomNumber = Math.floor(Math.random( ) * 3);
const computerChoice = choices[randomNumber];
console.log(`computer choice ${computerChoice}`)

if (userChoice === computerChoice) {
    console.log("you are tie")
}else if (userChoice === "rock"){
    if (computerChoice === "paper"){
    console.log("You lose")}
    else{
        console.log("You win")
    }
}
else if (userChoice === "paper"){
    if (computerChoice === "scissors"){
    console.log("You lose")}
    else{
        console.log("You win")
    }
}
else if (userChoice === "scissors"){
    if (computerChoice === "rock"){
    console.log("You lose")}
    else{
        console.log("You win")
    }
}
