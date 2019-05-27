var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);

function isvalid(bool){
	return bool;
}

var aanswer = 
	"your account number is " + (isvalid(true) ? "1234" : "not available");