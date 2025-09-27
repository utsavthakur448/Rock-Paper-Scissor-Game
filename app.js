let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

const gencomputerchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randindex = Math.floor(Math.random() * 3);
    return options[randindex];
};

const updateScore = () => {
    document.querySelector(".user-score").innerHTML = `${userscore}<br>You`;
    document.querySelector(".comp-score").innerHTML = `${compscore}<br>Computer`;
};

const showResult = (text) => {
    document.getElementById("play").textContent = text;
};

const drawgame = () => {
    showResult("It's a Draw!");
};

const showwinner = (userwin) => {
    if (userwin) {
        userscore++;
        showResult("You Win!");
    } else {
        compscore++;
        showResult("You Lose!");
    }
    updateScore();
};

const Playgame = (userchoice) => {
    const compchoice = gencomputerchoice();

    document.getElementById("computer-choice").textContent = `Computer chose: ${compchoice}`;

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        Playgame(userchoice);
    });
});