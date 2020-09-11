var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImgSource1 = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImgSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelector("img.img1").setAttribute("src", randomImgSource1)

document.querySelector("img.img2").setAttribute("src", randomImgSource2)

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins! 🎉<br><span>Refresh me...</span>";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🎉<br><span>Refresh me...</span>";
} else {
  document.querySelector("h1").innerHTML = "Draw!<br><span>Refresh me...</span>";
}
