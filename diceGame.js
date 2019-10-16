function runWhenLoaded(){
	hideInterface();
	showStartBtn();
}
function start(){
	hideInterface();
	buildDiceTray();
	showPlayHandBtn();
}
function playHand(){
	hidePlayHandBtn();
	hideCallOutput();
	clearDiceSlots();
	clearText();
	checkDiceTray();
	if(takeBlindP1() && takeBlindP2()){
		openFirstDieP1();
		openFirstDieP2();
	}
}
function playAgain(){
	clearDiceSlots();
	clearText();
	start();
}
function clearText(){
	document.getElementById("textOutput").innerHTML = "";
	document.getElementById("handTextOutput").innerHTML = "";

}
function showPlayHandBtn(){
	document.getElementById("playHandBtn").style.visibility = "visible";
}
function showStartBtn(){
	document.getElementById("startBtn").style.visibility = "visible";
}
function hidePlayHandBtn(){
	document.getElementById("playHandBtn").style.visibility = "hidden";
}
function showPlayAgainBtn(){
	document.getElementById("playAgainBtn").style.visibility = "visible";
}
function hidePlayAgainBtn(){
	document.getElementById("playAgainBtn").style.visibility = "hidden";
}
function rollDie(size){
	let roll = Math.random() * (size);
	return Math.floor(roll) + 1;
}
function hideInterface(){
let hide = document.getElementsByClassName('hidden');
for(let i = 0; i < hide.length; i++){
	hide[i].style.visibility='hidden'
	}
}
function buildDiceTray(resetPot = true){
	let buildArray = document.getElementsByClassName("diceTrayDisplay");
	for(let i = 0; i < buildArray.length; i++){
		buildArray[i].innerHTML = 2;
	}
	document.getElementById("p1d13").innerHTML = 3;
	document.getElementById("p2d13").innerHTML = 3;
	document.getElementById("p1d10").innerHTML = 3;
	document.getElementById("p2d10").innerHTML = 3;
	if(resetPot){
	document.getElementById("p1Chips").innerHTML = 50;
	document.getElementById("p2Chips").innerHTML = 50;
	document.getElementById("potOutput").innerHTML = 0;
	}
}
function displayDie(size, location, className,){
	let number = rollDie(size);
	let suit = "";
	if(location.charAt(1)=="u"){
		if(size > 9){
		document.getElementById(location).style.backgroundImage = "url(images/diamondsGreen.png)";
		suit = 'diamonds';
		}
		else if(size > 5){
		document.getElementById(location).style.backgroundImage = "url(images/heartsGreen.png)";
		suit = 'hearts';
		}
		else if(size > 2){
		document.getElementById(location).style.backgroundImage = "url(images/clubsGreen.png)";
		suit = 'clubs';
		}
	}	
	if(location.charAt(1)=="1"){
		if(size > 9){
		document.getElementById(location).style.backgroundImage = "url(images/diamondsBlue.png)";
		suit = 'diamonds';
		}
		else if(size > 5){
		document.getElementById(location).style.backgroundImage = "url(images/heartsBlue.png)";
		suit = 'hearts';
		}
		else if(size > 2){
		document.getElementById(location).style.backgroundImage = "url(images/clubsBlue.png)";
		suit = 'clubs';
		}
	}
	if(location.charAt(1)=="2"){
		if(size > 9){
		document.getElementById(location).style.backgroundImage = "url(images/diamondsPink.png)";
		suit = 'diamonds';
		}
		else if(size > 5){
		document.getElementById(location).style.backgroundImage = "url(images/heartsPink.png)";
		suit = 'hearts';
		}
		else if(size > 2){
		document.getElementById(location).style.backgroundImage = "url(images/clubsPink.png)";
		suit = 'clubs';
		}
	}
		if(number == 1){
		document.getElementById(location).innerHTML = "<p class='" + className + " " + suit + "'>A</p>";
		}
		else if(number < 11){
		document.getElementById(location).innerHTML = "<p class='" + className + " " + suit + "'>" + number + "</p>";
		}
		else if(number == 11){
		document.getElementById(location).innerHTML = "<p class='" + className + " " + suit + "'>J</p>";
		}
		else if(number == 12){
		document.getElementById(location).innerHTML = "<p class='" + className + " " + suit + "'>Q</p>";
		}
		else if(number == 13){
		document.getElementById(location).innerHTML = "<p class='" + className + " " + suit + "'>K</p>";
		}
		document.getElementById(location).style.paddingTop = "14%";
}
function clearDiceSlot(element){
	element.innerHTML = "";
	element.style.backgroundImage = "";
	element.style.paddingTop = "18%";
}
function clearDiceSlots(){
	let diceArray = document.getElementsByClassName("diceSlot");
	for(let i = 0; i < diceArray.length; i ++){
		clearDiceSlot(diceArray[i]);
	}
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
		displayDie(getPublicDiceSize(), "public" + i, "flopDie p1Hand p2Hand");
	}
}
function turn(){
	displayDie(getPublicDiceSize(), "public4", "turnDie p1Hand p2Hand");
	openP1Bets();
}
function river(){
	displayDie(getPublicDiceSize(), "public5", "riverDie p1Hand p2Hand");
	openP1Bets();
}
function openP1Bets(toCall = 0){
	document.getElementById("p1BetInput").value=0;
	let betArray = document.getElementsByClassName("betP1");
	for(let i = 0; i < betArray.length; i++){
		betArray[i].style.visibility = "visible";
	}
	toCall = document.getElementById("callAmount").innerHTML;
	if(toCall == 0){
		document.getElementById("p1CallBtn").style.visibility = "hidden";
	}
	else{
		document.getElementById("p1CheckBtn").style.visibility = "hidden";
	}
}
function openP2Bets(toCall = 0){
	document.getElementById("p2BetInput").value=0;
	let betArray = document.getElementsByClassName("betP2");
	for(let i = 0; i < betArray.length; i++){
		betArray[i].style.visibility = "visible";
	}
	toCall = document.getElementById("callAmount").innerHTML;
	if(toCall == 0){
		document.getElementById("p2CallBtn").style.visibility = "hidden";
	}
	else{
		document.getElementById("p2CheckBtn").style.visibility = "hidden";
	}
}
function closeP1Bets(isFold = false){
	let betArray = document.getElementsByClassName("betP1");
	for(let i = 0; i < betArray.length; i++){
		betArray[i].style.visibility = "hidden";
	}
	if(!isFold){
		gameFlow();
	}
}
function closeP2Bets(isFold = false){
	let betArray = document.getElementsByClassName("betP2");
	for(let i = 0; i < betArray.length; i++){
		betArray[i].style.visibility = "hidden";
	}
	if(!isFold){
		gameFlow();
	}
}
function hideCallOutput(){
	document.getElementById("callAmount").style.visibility = "hidden";
	document.getElementById("callOutput").style.visibility = "hidden";
	document.getElementById("callAmount").innerHTML = 0;
}
function showCallOutput(){
	document.getElementById("callAmount").style.visibility = "visible";
	document.getElementById("callOutput").style.visibility = "visible";
}
function gameFlow(){
	if(!areBetsOpen() && document.getElementsByClassName("turnDie").length == 0){
			turn();
		}
		else if(!areBetsOpen() && document.getElementsByClassName("riverDie").length == 0){
			river();
		}
		else if(!areBetsOpen()){
			adjudicateHands();
		}
}
function placeBetP1(toCall = 0){
	let bet = Math.abs(parseInt(document.getElementById("p1BetInput").value));
	toCall = parseInt(document.getElementById("callAmount").innerHTML);
	let raise = bet + toCall;
	if(document.getElementById("p1Chips").innerHTML >= raise && bet > 0){
		document.getElementById("p1Chips").innerHTML -= raise;
		document.getElementById("potOutput").innerHTML = raise + parseInt(document.getElementById("potOutput").innerHTML);
		showCallOutput();
		document.getElementById("callAmount").innerHTML = raise - toCall;
		openP2Bets();
		closeP1Bets();
	}
	else if(document.getElementById("p1Chips").innerHTML < raise){
		alert("Bet too large(Player 1).");
	}
	else if(bet == 0){
		alert("Cannot raise 0 chips.");
	}
}
function placeBetP2(toCall = 0){
	let bet = Math.abs(parseInt(document.getElementById("p2BetInput").value));
	toCall = parseInt(document.getElementById("callAmount").innerHTML);
	let raise = bet + toCall;
	if(document.getElementById("p2Chips").innerHTML >= raise && bet > 0){
		document.getElementById("p2Chips").innerHTML -= raise;
		document.getElementById("potOutput").innerHTML = raise + parseInt(document.getElementById("potOutput").innerHTML);
		showCallOutput();
		document.getElementById("callAmount").innerHTML = raise - toCall;
		openP1Bets();
		closeP2Bets();
	}
	else if(document.getElementById("p2Chips").innerHTML < raise){
		alert("Bet too large(Player 2).");
	}
	else if(bet == 0){
		alert("Cannot raise 0 chips.");
	}
}
function callP1(){
	let toCall = parseInt(document.getElementById("callAmount").innerHTML);
	if(document.getElementById("p1Chips").innerHTML >= toCall){
		document.getElementById("p1Chips").innerHTML -= toCall;
		document.getElementById("potOutput").innerHTML = toCall + parseInt(document.getElementById("potOutput").innerHTML);
		document.getElementById("callAmount").innerHTML = 0;
		closeP1Bets();
		hideCallOutput();
	}
	else{
		document.getElementById("potOutput").innerHTML = parseInt(document.getElementById("p1Chips").innerHTML) + parseInt(document.getElementById("potOutput").innerHTML);
		document.getElementById("p1Chips").innerHTML = 0;;
		document.getElementById("callAmount").innerHTML = 0;
		closeP1Bets();
		hideCallOutput();
	}
}
function callP2(){
	let toCall = parseInt(document.getElementById("callAmount").innerHTML);
	if(document.getElementById("p2Chips").innerHTML >= toCall){
		document.getElementById("p2Chips").innerHTML -= toCall;
		document.getElementById("potOutput").innerHTML = toCall + parseInt(document.getElementById("potOutput").innerHTML);
		document.getElementById("callAmount").innerHTML = 0;
		closeP2Bets();
		hideCallOutput();
	}
	else{
		document.getElementById("potOutput").innerHTML = parseInt(document.getElementById("p2Chips").innerHTML) + parseInt(document.getElementById("potOutput").innerHTML);
		document.getElementById("p2Chips").innerHTML = 0;;
		document.getElementById("callAmount").innerHTML = 0;
		closeP2Bets();
		hideCallOutput();
	}
}
function checkP1(){
	openP2Bets();
	closeP1Bets();
}
function checkP2(){
	closeP2Bets();
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
	if(areAllDiceChosen()){
		flop();
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
	if(areAllDiceChosen()){
		flop();
	}
}
function useFirstDiceP1(location, size, target){
	if(document.getElementById(location).innerHTML > 0){
	document.getElementById(location).innerHTML--;
	displayDie(size, target, "playerDice p1Hand")
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
	displayDie(size, target, "playerDice p2Hand")
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
		displayDie(size, target, "playerDice p1Hand")
		closeSecondDieP1();
		if(areAllDiceChosen()){
		openP1Bets();
	}
	}
	else{
		alert("Not enough of that kind of die.")
	}
}
function useSecondDiceP2(location, size, target){
	if(document.getElementById(location).innerHTML > 0){
	document.getElementById(location).innerHTML--;
	displayDie(size, target, "playerDice p2Hand")
	closeSecondDieP2();
	if(areAllDiceChosen()){
		openP1Bets();
	}
	}
	else{
		alert("Not enough of that kind of die.")
	}
}
function takeBlindP1(){
	let blind = 5;
	let pot = parseInt(document.getElementById("potOutput").innerHTML);
	if(parseInt(document.getElementById("p1Chips").innerHTML) == 0){
		p1Loses();
		return false;
	}
	else if(parseInt(document.getElementById("p1Chips").innerHTML) > blind){
		document.getElementById("p1Chips").innerHTML -= blind;
		pot += blind;
		document.getElementById("potOutput").innerHTML = pot;
		return true;
	}
	else if(parseInt(document.getElementById("p1Chips").innerHTML) > 0){
		blind = parseInt(document.getElementById("p1Chips").innerHTML);
		document.getElementById("p1Chips").innerHTML -= blind;
		pot += blind;
		document.getElementById("potOutput").innerHTML = pot;
		return true;
	}
}
function takeBlindP2(){
	let blind = 5;
	let pot = parseInt(document.getElementById("potOutput").innerHTML);
	if(parseInt(document.getElementById("p2Chips").innerHTML) == 0){
		p2Loses();
		return false;
	}
	else if(parseInt(document.getElementById("p2Chips").innerHTML) > blind){
		document.getElementById("p2Chips").innerHTML -= blind;
		pot += blind;
		document.getElementById("potOutput").innerHTML = pot;
		return true;
	}
	else if(parseInt(document.getElementById("p2Chips").innerHTML) > 0){
		blind = parseInt(document.getElementById("p2Chips").innerHTML);
		document.getElementById("p2Chips").innerHTML -= blind;
		pot += blind;
		document.getElementById("potOutput").innerHTML = pot;
		return true;
	}
}
function areAllDiceChosen(){
	let array = document.getElementsByClassName("playerDice");
	if(array.length === 4){
		return true;
	}
	return false;
}
function areBetsOpen(){
	if(document.getElementById("p2BetInput").style.visibility == "hidden" && document.getElementById("p1BetInput").style.visibility == "hidden"){
		return false;
	}
	else{
		return true;
	}
}
function checkDiceTray(){
	let remainingDice = 0;
	remainingDice += parseInt(document.getElementById("p2d13").innerHTML);
	remainingDice += parseInt(document.getElementById("p2d10").innerHTML);
	remainingDice += parseInt(document.getElementById("p2d8").innerHTML);
	remainingDice += parseInt(document.getElementById("p2d6").innerHTML);
	remainingDice += parseInt(document.getElementById("p2d4").innerHTML);
	remainingDice += parseInt(document.getElementById("p2d3").innerHTML);
	if(remainingDice == 0){
		buildDiceTray(false);
	}
}
function p1Loses(){
	document.getElementById("textOutput").innerHTML = "Player 1 is out of chips. Play Again?";
	showPlayAgainBtn();
}
function p2Loses(){
	document.getElementById("textOutput").innerHTML = "Player 2 is out of chips. Play Again?";
	showPlayAgainBtn();
}
function splitPot(){
	let pot = parseInt(document.getElementById("potOutput").innerHTML);
	let rollover = pot % 2;
	pot = (pot/2) - ((pot / 2) % 1);
	document.getElementById("p1Chips").innerHTML = parseInt(document.getElementById("p1Chips").innerHTML) + pot;
	document.getElementById("p2Chips").innerHTML = parseInt(document.getElementById("p2Chips").innerHTML) + pot;
	document.getElementById("potOutput").innerHTML = rollover;
	showPlayHandBtn();
	document.getElementById("textOutput").innerHTML = "The pot is split.";

}
function p1WinsHand(){
	let pot = parseInt(document.getElementById("potOutput").innerHTML);
	document.getElementById("p1Chips").innerHTML = parseInt(document.getElementById("p1Chips").innerHTML) + pot;
	document.getElementById("potOutput").innerHTML = 0;
	showPlayHandBtn();
	closeP2Bets(true);
	document.getElementById("textOutput").innerHTML = "Player 1 wins the hand.";
}
function p2WinsHand(){
	let pot = parseInt(document.getElementById("potOutput").innerHTML);
	document.getElementById("p2Chips").innerHTML = parseInt(document.getElementById("p2Chips").innerHTML) + pot;
	document.getElementById("potOutput").innerHTML = 0;
	showPlayHandBtn();
	closeP1Bets(true);
	document.getElementById("textOutput").innerHTML = "Player 2 wins the hand.";
}
function adjudicateHands(){
	let player1Hand = getBestHand(1);
	let player2Hand = getBestHand(2);
	let winningHand = compareHandVaues(player1Hand, player2Hand, true);
	if(winningHand[winningHand.length - 1] == "tie"){
		splitPot();
		printWinningHandText(winningHand);
		console.log("split");
	}
	else if(winningHand == player1Hand){
		p1WinsHand();
		printWinningHandText(winningHand);
		console.log("P1 Wins");
	}
	else if(winningHand == player2Hand){
		p2WinsHand();
		printWinningHandText(winningHand);
		console.log("P2 Wins");
	}
}
function printWinningHandText(matrix){
	let valueArray = getHandValue(matrix);
	switch(valueArray[0]){
		case 9:
			document.getElementById("handTextOutput").innerHTML = convertFaceCardValues(valueArray[1]) + " high straight flush.";
			break;
		case 8:
			document.getElementById("handTextOutput").innerHTML = "Four of a kind(" + convertFaceCardValues(valueArray[1]) + "s)";
			break;
		case 7:
			document.getElementById("handTextOutput").innerHTML = "Full House(" + convertFaceCardValues(valueArray[1]) + "'s on " + convertFaceCardValues(valueArray[2]) + "'s)";
			break;
		case 6:
			document.getElementById("handTextOutput").innerHTML = convertFaceCardValues(valueArray[1]) + " high flush.";
			break;
		case 5:
			document.getElementById("handTextOutput").innerHTML = convertFaceCardValues(valueArray[1]) + " high straight";
			break;
		case 4:
			document.getElementById("handTextOutput").innerHTML = "Three of a kind(" + convertFaceCardValues(valueArray[1]) + "s)";
			break;
		case 3:
			document.getElementById("handTextOutput").innerHTML = "Two Pair( " + convertFaceCardValues(valueArray[1]) + "'s' and " + convertFaceCardValues(valueArray[2]) + "'s)";
			break;
		case 2:
			document.getElementById("handTextOutput").innerHTML = "Pair of " + convertFaceCardValues(valueArray[1]) + "'s";
			break;
		case 1:
			document.getElementById("handTextOutput").innerHTML = "Highcard " + convertFaceCardValues(valueArray[1]);
			break;
		default:
			break;
	}
}
function getDiceSuit(dice){
	if(isDiamond(dice)){
		return "diamonds";
	}
	if(isHeart(dice)){
		return "hearts";
	}
	if(isClub(dice)){
		return "clubs";
	}

}
function isDiamond(dice){
	let suitArray = document.getElementsByClassName("diamonds");
	for(let i = 0; i < suitArray.length; i++){
		if(dice == suitArray[i]){
			return true;
		}
	}
	return false;
}
function isHeart(dice){
	let suitArray = document.getElementsByClassName("hearts");
	for(let i = 0; i < suitArray.length; i++){
		if(dice == suitArray[i]){
			return true;
		}
	}
	return false;
}
function isClub(dice){
	let suitArray = document.getElementsByClassName("clubs");
	for(let i = 0; i < suitArray.length; i++){
		if(dice == suitArray[i]){
			return true;
		}
	}
	return false;
}
function getHandMatrix(array){
	let output = [];
	for(let i = 0; i < array.length; i++){
		output[i] = [0,""];
		output[i][1] = getDiceSuit(array[i]);
		if(array[i].innerHTML === "A"){
			output[i][0] = 14;
		}
		else if(array[i].innerHTML === "J"){
			output[i][0] = 11;
		}
		else if(array[i].innerHTML === "Q"){
			output[i][0] = 12;
		}
		else if(array[i].innerHTML === "K"){
			output[i][0] = 13;
		}
		else{
			output[i][0] = parseInt(array[i].innerHTML);
		}
	}
	return output;
}
function getBestHand(playerNumber){
	let inputMatrix = getHandMatrix(document.getElementsByClassName("p" + playerNumber + "Hand"));
	let testMatrix = [[]];
	let currentBestHand = [0,0,0,0,0];
	for(let i = 0; i < (inputMatrix.length - 1); i++){
		for(let j = i + 1; j < inputMatrix.length; j++){
			testMatrix = [];
			for(let k = 0; k < inputMatrix.length; k++){
				if(k !== j && k !== i){
				testMatrix.push(inputMatrix[k]);
				}
			}
			currentBestHand = compareHandVaues(testMatrix, currentBestHand);
		}
	}
	return currentBestHand;
}
function getHandValue(matrix){
	let highCard = getHighCard(matrix);
	let repeats;
	if(isNofAKind(matrix)){
		repeats = getNOfAKind(matrix);
	} else{
		repeats = [0,0];
	}
	if(isStraight(matrix) && isFlush(matrix)){
		if(highCard != 14 || getHighCard(matrix, highCard) == 13){
			return [9,highCard,0,0,0,0];
		}
		else{
			return [9,getHighCard(matrix, highCard),0,0,0,0]
		}
	}
	else if(repeats[0] == 4){
		return [8,repeats[1],highCard,getHighCard(matrix,highCard),0,0,0];
	}
	else if(isFullHouse(matrix)){
		return [7,getFullHouseTop(matrix),getFullHouseBottom(matrix),0,0,0];
	}
	else if(isFlush(matrix)){
		return [6,highCard,getHighCard(matrix, highCard),getHighCard(matrix, getHighCard(matrix, highCard)),getHighCard(matrix, getHighCard(matrix, getHighCard(matrix, highCard))),getHighCard(matrix,getHighCard(matrix, getHighCard(matrix, getHighCard(matrix, highCard))))];
	}
	else if(isStraight(matrix)){
		if(highCard != 14 || getHighCard(matrix, highCard) == 13){
			return [5,highCard,0,0,0,0];
		}
		else{
			return [5,getHighCard(matrix, highCard),0,0,0,0]
		}
	}
	else if(repeats[0] == 3){
		return [4,repeats[1], highCard, getHighCard(matrix, highCard),getHighCard(getHighCard(matrix, highCard)),0,0];
	}
	else if(isTwoPair(matrix)){
		return [3,repeats[1],getTwoPairSecondPair(matrix),getTwoPairKicker(matrix, repeats[1], getTwoPairSecondPair(matrix)),0];
	}
	else if(repeats[0] == 2){
		return [2,repeats[1],highCard,getHighCard(matrix, highCard),getHighCard(matrix, getHighCard(matrix, highCard)),getHighCard(matrix, getHighCard(matrix, getHighCard(matrix, highCard))),0]
	}
	else{
		return [1,highCard,0,0,0];
	}
}
function convertFaceCardValues(number){
	switch(number){
		case 14:
			return "Ace";
			break;
		case 13:
			return "King";
			break;
		case 12:
			return "Queen";
			break;
		case 11:
			return "Jack";
			break;
		default:
			return number;
			break;
	}
}
function compareHandVaues(matrix1, matrix2, isFinal = false){
	let value1 = getHandValue(matrix1);
	let value2 = getHandValue(matrix2);
	for(let i = 0; i < value1.length; i++){
		if(value1[i] > value2[i]){
			return matrix1;
		}
		else if (value2[i] > value1[i]){
			return matrix2;
		}
	}
	if(isFinal){
		matrix1.push("tie"); 
	}
	return matrix1;
}
function isFlush(matrix){
	let counter = 0;
	for(let i = 0; i < matrix.length; i++){
		if(matrix[i][1] === matrix[0][1] && matrix !== 0 && matrix[i][1] !== undefined){

			counter++;
		}
	if(counter >=5){
		return true;
	}
	}
	return false;
} 
function getHighCard(matrix, currentHighCard = 15){
	let currentLargest = 0;
	for(let i = 0; i < matrix.length; i++){
		if(matrix[i][0] > currentLargest && matrix[i][0] < currentHighCard){
			currentLargest = matrix[i][0];
		}
	}
	return currentLargest;
}
function isNofAKind(matrix){
	let counter;
	for(let i = 0; i < matrix.length; i++){
		counter = 0;
		for(let j = 0; j < matrix.length; j++){
			if(matrix[i][0] === matrix[j][0]){
				counter++;
			}
		}
		if(counter >= 2){
			return true;
		}
	}

	return false;
}
function getNOfAKind(matrix){
	let counter;
	let currentLargest = 0;
	let currentCard;
	for(let i = 0; i < matrix.length; i++){
		counter = 0;
		for(let j = 0; j < matrix.length; j++){
			if(matrix[i][0] === matrix[j][0]){
				counter++;
			}
		}
	if(counter > currentLargest){
			currentLargest = counter;
			currentCard = matrix[i][0];
		}
	}
		return [currentLargest, currentCard];
	
}
function isFullHouse(matrix){
	let counter1;
	let counter2;
	for(let i = 0; i < matrix.length; i++){
		counter1 = 0;
		for(let j = 0; j < matrix.length; j++){
			if(matrix[i][0] === matrix[j][0]){
				counter1++;
			}
		}
		if(counter1 >=3){
			for(let j = 0; j < matrix.length; j++){
				counter2 = 0;
				for(let k = 0; k < matrix.length; k++){
					if(matrix[j][0] === matrix[k][0] && matrix[j][0] !== matrix[i][0]){
					counter2++;
					}
				}
				if(counter2 >= 2){
					return true;
				}
			}
		}
	}
	return false;
}
function getFullHouseTop(matrix){
	return getNOfAKind(matrix)[1];
}
function getFullHouseBottom(matrix){
	let topCard = getFullHouseTop(matrix);
	for(let i = 0; i < matrix.length; i++){
		if(matrix[i][0] !== topCard){
			return matrix[i][0];
		}
	}
}
function isTwoPair(matrix){
	if(isNofAKind(matrix) && getNOfAKind(matrix)[0] == 2){
		let firstPair = getNOfAKind(matrix);
		for(let i = 0; i < matrix.length; i++){
			for(let j = 0; j < matrix.length; j++){
				if(i !== j && matrix[i][0] == matrix[j][0] && matrix[i][0] !== firstPair[1] && !isFullHouse(matrix) && matrix[j][0] !== 1 && firstPair[1] !== 1){
					return true;
				}	
			}
		}
	}
	return false;
}
function getTwoPairSecondPair(matrix){
	let firstPair = getNOfAKind(matrix);
	let secondPair =[];
	let kicker;
		for(let i = 0; i < matrix.length; i++){
			for(let j = 0; j < matrix.length; j++){
				if(i !== j && matrix[i][0] == matrix[j][0] && matrix[i][0] !== firstPair[1]){
					secondPair = [matrix[i][0],2];
				}

			}
		}
			return secondPair[0];
}
function getTwoPairKicker(matrix, firstCard, secondCard){
	for(let i = 0; i < matrix.length; i++){
		if(matrix[i][0] !== firstCard && matrix[i][0] !== secondCard){
			return matrix[i][0];
		}
	}
}
function isStraight(matrix){
	let current;
	let counter;
	for(let i = 0; i < matrix.length; i++){
		current = matrix[i][0];
		counter = 1;
		for(let j = 0; j < matrix.length; j++){
			if(((current + 1) == matrix[j][0]) || (current == 14 && matrix[j][0] == 2)){
				if(current == 14 && counter == 1){
					current = 2;
				}
				else{
				current++;
				}	
				counter++;
				j = -1;
			}
		}
		if(counter == 5){
			return true;
		}
	}
	return false;
}
/////////////////////////////////////////////









