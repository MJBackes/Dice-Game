hideInterface();
buildDiceTray();
function rollDie(size){
	let roll = Math.random() * (size - 1);
	return Math.round(roll) + 1;
}
function hideInterface(){
let hide = document.getElementsByClassName('hidden');
for(let i = 0; i < hide.length; i++){
	hide[i].style.visibility='hidden'
	}
}
function buildDiceTray(){
	let buildArray = document.getElementsByClassName("diceTrayDisplay");
	for(let i = 0; i < buildArray.length; i++){
		buildArray[i].innerHTML = 2;
	}
	document.getElementById("p1d12").innerHTML = 3;
	document.getElementById("p2d12").innerHTML = 3;
	document.getElementById("p1d10").innerHTML = 3;
	document.getElementById("p1d10").innerHTML = 3;
	document.getElementById("p1Chips").innerHTML = 50;
	document.getElementById("p2Chips").innerHTML = 50;
}
function displayDie(number, size, location){
	if(size > 9){
	document.getElementById(location).style.backgroundImage = "url(images/diamonds.png)";
	}
	else if(size > 5){
	document.getElementById(location).style.backgroundImage = "url(images/hearts.png)";
	}
	else if(size > 2){
	document.getElementById(location).style.backgroundImage = "url(images/clubs.png)";
	}
	if(number < 11){
	document.getElementById(location).innerHTML = "<h1>" + number + "</h1>"
	}
	else if(number == 11){
	document.getElementById(location).innerHTML = "<h1>J</h1>"
	}
	else if(number == 12){
	document.getElementById(location).innerHTML = "<h1>Q</h1>"
	}
	else if(number == 13){
	document.getElementById(location).innerHTML = "<h1>K</h1>"
	}
}
function flop(){

}