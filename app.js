let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#Comp-score");
const gencompchoice = ( ) =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText = "Game was Draw.Play again.";
    msg.style.backgroundColor = "#081b13";
};
 const showWiner=(userWin,) =>{
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = 'You win!. Your rock beats scissors';
        msg.style.backgroundColor = "green";
    } else {
      compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = 'You lost. scissors beats  Yuor rock';
        msg.style.backgroundColor = "red";
    }

}


const playGame = (userchoice) => {
console.log("user choice =",userchoice);
/// Generate comp choice
const compchoice = gencompchoice();
console.log("comp choice =",compchoice);
if(userchoice === compchoice){
    //game draw
    drawGame();
} else{
    let userwin = true;
    if(userchoice === "rock"){
        userwin = compchoice === "paper" ? false: true;
    } else if(userchoice === "paper"){
      userwin =  compchoice === "scissors" ? false: true;
    } else {
        userwin = compchoice === "rock" ? false: true;
    }
    showWiner(userwin, userchoice,compchoice);
}

};



choices.forEach((choice) =>{
    console.log(choice);
choice.addEventListener("click",() =>{
   const userchoice = choice.getAttribute("Id");
playGame(userchoice);
});


});

