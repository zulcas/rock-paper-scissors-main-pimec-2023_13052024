//States Values
let options = ["scissors", "paper", "rock"];
let userChoice;
let machineChoice;
let scissors = document.querySelector(".game-body__circle-container-scissors");
let paper = document.querySelector(".game-body__circle-container-paper");
let rock = document.querySelector(".game-body__circle-container-rock");
let userPoints = 0;


//Click events to buttons
scissors.addEventListener("click", game);
paper.addEventListener("click", game);
rock.addEventListener("click", game);


//Function

function game(event){
    userChoice = event.currentTarget.id;
    machineChoice = options[Math.floor(Math.random()*3)];
    if (userChoice == machineChoice){
        console.log("empate");
    }
    else if ((userChoice == "scissors" && machineChoice == "paper")||(userChoice == "paper" && machineChoice == "rock") || (userChoice == "rock" && machineChoice == "scissors")){
        //User win
        console.log("winn!")

        //Style code
        document.querySelector(".bg-triangle").style.display = "none";
        event.currentTarget.setAttribute("id", "paper");
        document.getElementById(machineChoice).setAttribute("id", "scissors");

        for (let choices of options){
            if (choices != userChoice && choices != machineChoice){
                document.getElementById(choices).style.display = "none";
            }
        }
        
        newScore();

    }
    else{
        console.log("you lose")
    }
    
}

function newScore(){
    userPoints ++;
    document.querySelector(".header__value").textContent = userPoints;
}


function scissorsGame (event){
    userChoice = "scissors";
    //machineChoice = options[Math.floor(Math.random()*3)];
    machineChoice = "rock";
    //Create style format
    //rock.style.display = "none";
    document.querySelector(".bg-triangle").style.display = "none"
    scissors.classList.add("game-body__circle-container-paper");
    scissors.classList.remove("game-body__circle-container-scissors");
    if (machineChoice =="scissors"){
        //empate
    }
    else if (machineChoice == "rock"){
        //user lose
        //Create style
        rock.classList.add("game-body__circle-container-scissors");
        rock.classList.remove("game-body__circle-container-rock");
        //Create user messages
        const youPickedNode = document.createElement("p");
        const youPickedText = document.createTextNode ("You picked")
        youpickednode.appendChild(youpickedtext);

        document.querySelector("#paper").insertAfter(youPickedNode, youPickedText);


    }
    else{
        //user win
    }
}

function rockGame (event){
    userChoice = "rock";
    machineChoice = options[Math.floor(Math.random()*2)];
    if (machineChoice =="rock"){
        //empate
    }
    else if (machineChoice == "paper"){
        //user lose
    }
    else{
        //user win
    }
}

function paperGame (event){
    userChoice = "paper";
    machineChoice = options[Math.floor(Math.random()*2)];
    if (machineChoice =="paper"){
        //empate
    }
    else if (machineChoice == "scissors"){
        //user lose
    }
    else{
        //user win
    }
}



