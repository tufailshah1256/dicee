let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[0].setAttribute("src", `./images/dice${randomNumber1}.png`);
document.querySelectorAll("img")[1].setAttribute("src", `./images/dice${randomNumber2}.png`);
let winner;
if(randomNumber1>randomNumber2){
    winner = "Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    winner = "Player 2 Wins!";
}
else{
    winner = "Draw";
}
document.querySelector("h1").innerText = winner;