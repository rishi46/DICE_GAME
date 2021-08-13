
var randomNumber1 = Math.floor((Math.random()*6)+1);

var image = "Images/dice"+randomNumber1+".png"

 var dice_image = document.querySelector("img");

 dice_image.setAttribute("src", image);