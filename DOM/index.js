var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDieceImage1 = "dice"+randomNumber1+".png";
var randomImageSource1 = "images/"+randomDieceImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDieceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/"+randomDieceImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 wins.";
}
else if(randomNumber2>randomNumber1)
{
  document.querySelector("h1").innerHTML = "Player 2 wins.";
}
else
{
  document.querySelector("h1").innerHTML ="Math draw.";
}
