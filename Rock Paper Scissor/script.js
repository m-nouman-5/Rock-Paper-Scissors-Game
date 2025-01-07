let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");


const genCompChoice = ()=> {
     const option=["rock","paper","scissors"];
     const ranIndx=Math.floor(Math.random() *3);
     return option[ranIndx];
};

const draw=()=>{
    console.log("Game was draw");
    msg.innerText="Game Draw. Play Again";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
};

const showWinner=(userwin, userChoice, compChoice)=>{
    if(userwin){
        // console.log("you win");
        userscore++;
        userScorepara.innerText=userscore;
        msg.innerText="You win";
        // msg.innerText=`You win your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor="green";
    msg.style.color="black";
    }
    else{
        console.log("You lose");
        computerscore++;
        compScorepara.innerText =  computerscore;
        msg.innerText=`You lose`;
        msg.style.backgroundColor="red";
    msg.style.color="black";
    }

};

const playGame=(userChoice)=>{
    console.log("User choice",userChoice);
    let compChoice=genCompChoice();
    console.log("Computer choice",compChoice);

    if(userChoice === compChoice){
        draw();
    }
    else{
        let userwin=true;
        if(userChoice === "rock"){
            //paper,scissor
            userwin=compChoice === "paper"?false:true;
        }
        else if(userChoice === "paper"){
            userwin=compChoice === "scissors"?false:true;
        }
        else{
            userwin=compChoice ==="rock"?false:true;
        }
        showWinner(userwin);
    }
   

};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       const userChoice= choice.getAttribute("id");
       playGame(userChoice);
    });
});



