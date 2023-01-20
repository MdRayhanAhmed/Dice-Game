///For Player1
randomNumber1 = Math.floor(Math.random() * (6 - 1 + 1) + 1); ///1-6
randomDiceImage= "dice"+randomNumber1+".png"; ///dice1.png - dice6.png
document.querySelector(".img1").setAttribute("src","images/"+randomDiceImage);/// images/dice1.png - images/dice6.png

///for Player2
randomNumber2= Math.floor(Math.random()*(6-1+1)+1);
randomDiceImage2="dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src","images/"+randomDiceImage2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML= "🚩Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML= "Player 2 Wins🚩";
}
else{
  document.querySelector("h1").innerHTML= "Draw!";
}
