let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoicce = () => {
    const options = ["rock", "paper", "scissors"];
    const randIx = Math.floor(Math.random() * 3);
    return options[randIx];
};
const drawGame = () =>{
   
    msg.innerText ="game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};
const showWinner =(userWin, userChoice, compChoice) => {
    if(userWin){
       userScore++;
       userScorePara.innerText = userScore;
        msg.innerText = 'You win! your ${userChoice} beats ${compchoice}';
        msg.style.backgroundColor ="green";
    }else {
        compScore++;
        compScorePara.innerText =userScore;
        
        msg.innerText ='you lose. ${compChoice} beats your ${userchoice}';
        msg.style.backgroundColor ="red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genCompChoicce();
    console.log("comp choice =", compChoice);
    if(userChoice === compChoice){
        drawGame();

    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;

        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false :true;
        } else {
           userWin =compChoice === "rock" ? false : true; 
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);

    });
});