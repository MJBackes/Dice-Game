function start(){
hideInterface();
buildDiceTray();
}
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
	document.getElementById("p1d13").innerHTML = 3;
	document.getElementById("p2d13").innerHTML = 3;
	document.getElementById("p1d10").innerHTML = 3;
	document.getElementById("p1d10").innerHTML = 3;
	document.getElementById("p1Chips").innerHTML = 50;
	document.getElementById("p2Chips").innerHTML = 50;
}
function displayDie(size, location){
	let number = rollDie(size);
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
	document.getElementById(location).innerHTML = "<h1>" + number + "</h1>";
	}
	else if(number == 11){
	document.getElementById(location).innerHTML = "<h1>J</h1>";
	}
	else if(number == 12){
	document.getElementById(location).innerHTML = "<h1>Q</h1>";
	}
	else if(number == 13){
	document.getElementById(location).innerHTML = "<h1>Q</h1>";
	}
	document.getElementById(location).style.paddingTop = "14%";
}
function getPublicDiceSize(){
	let size = rollDie(6);
	switch(size){
		case 1:
			return 3;
			break;
		case 2:
			return 4;
			break;
		case 3:
			return 6;
			break;
		case 4:
			return 8;
			break;
		case 5:
			return 10;
			break;
		case 6:
			return 13;
			break;
	}
}
function flop(){
	for(let i = 1; i < 4; i++){
		displayDie(getPublicDiceSize(), "public" + i);
	}
}
function openBets(){
	let betArray = document.getElementsByClassName("bet");
	for(let i = 0; i < betArray.length; i++){
		betArray[i].style.visibility = "visible";
	}
}
function closeP1Bets(){
	document.getElementById("p1BetInput").style.visibility = "hidden";
	document.getElementById("p1BetBtn").style.visibility = "hidden";
}
function closeP2Bets(){
	document.getElementById("p2BetInput").style.visibility = "hidden";
	document.getElementById("p2BetBtn").style.visibility = "hidden";
}
function placeBetP1(){
	let bet = document.getElementById("p1BetInput").value;
	if(document.getElementById("p1Chips").innerHTML > bet){
		document.getElementById("p1Chips").innerHTML -= bet;
		document.getElementById("potOutput").innerHTML += bet;
		closeP1Bets();
	}
	else{
		alert("Bet too large(Player 1).");
	}
}
function placeBetP2(){
	let bet = document.getElementById("p2BetInput").value;
	if(document.getElementById("p2Chips").innerHTML > bet){
		document.getElementById("p2Chips").innerHTML -= bet;
		document.getElementById("potOutput").innerHTML += bet;
		closeP2Bets();
	}
	else{
		alert("Bet too large(Player 2).");
	}
}
function openFirstDieP1(){
	let diceBtnArray = document.getElementsByClassName("firstSlotP1");
	for(let i = 0; i < diceBtnArray.length; i++){
		diceBtnArray[i].style.visibility = "visible";
	}
}
function closeFirstDieP1(){
	let diceBtnArray = document.getElementsByClassName("firstSlotP1");
	for(let i = 0; i < diceBtnArray.length; i++){
		diceBtnArray[i].style.visibility = "hidden";
	}
}
function openSecondDieP1(){
	let diceBtnArray = document.getElementsByClassName("secondSlotP1");
	for(let i = 0; i < diceBtnArray.length; i++){
		diceBtnArray[i].style.visibility = "visible";
	}
}
function closeSecondDieP1(){
	let diceBtnArray = document.getElementsByClassName("secondSlotP1");
	for(let i = 0; i < diceBtnArray.length; i++){
		diceBtnArray[i].style.visibility = "hidden";
	}
}
function openFirstDieP2(){
	let diceBtnArray = document.getElementsByClassName("firstSlotP2");
	for(let i = 0; i < diceBtnArray.length; i++){
		diceBtnArray[i].style.visibility = "visible";
	}
}
function closeFirstDieP2(){
	let diceBtnArray = document.getElementsByClassName("firstSlotP2");
	for(let i = 0; i < diceBtnArray.length; i++){
		diceBtnArray[i].style.visibility = "hidden";
	}
}
function openSecondDieP2(){
	let diceBtnArray = document.getElementsByClassName("secondSlotP2");
	for(let i = 0; i < diceBtnArray.length; i++){
		diceBtnArray[i].style.visibility = "visible";
	}
}
function closeSecondDieP2(){
	let diceBtnArray = document.getElementsByClassName("secondSlotP2");
	for(let i = 0; i < diceBtnArray.length; i++){
		diceBtnArray[i].style.visibility = "hidden";
	}
}
function useFirstDiceP1(location, size, target){
	if(document.getElementById(location).innerHTML > 0){
	document.getElementById(location).innerHTML--;
	displayDie(size, target)
	closeFirstDieP1();
	openSecondDieP1();
	}
	else{
		alert("Not enough of that kind of die.")
	}
}
function useFirstDiceP2(location, size, target){
	if(document.getElementById(location).innerHTML > 0){
	document.getElementById(location).innerHTML--;
	displayDie(size, target)
	closeFirstDieP2();
	openSecondDieP2();
	}
	else{
		alert("Not enough of that kind of die.")
	}
}
function useSecondDiceP1(location, size, target){
	if(document.getElementById(location).innerHTML > 0){
	document.getElementById(location).innerHTML--;
	displayDie(size, target)
	closeSecondDieP1();
	}
	else{
		alert("Not enough of that kind of die.")
	}
}
function useSecondDiceP2(location, size, target){
	if(document.getElementById(location).innerHTML > 0){
	document.getElementById(location).innerHTML--;
	displayDie(size, target)
	closeSecondDieP2();
	}
	else{
		alert("Not enough of that kind of die.")
	}
}