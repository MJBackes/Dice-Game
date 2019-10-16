hideInterface();
showStartBtn();
function start(){
	hideInterface();
	buildDiceTray();
	showPlayHandBtn();
}
function playHand(){
	hidePlayHandBtn();
	clearDiceSlots();
	clearText();
	checkDiceTray();
	if(takeBlindP1() && takeBlindP2()){
		flop();
		openBets();
	}
}
function playAgain(){
	clearDiceSlots();
	clearText();
	start();
}
function clearText(){
	document.getElementById("textOutput").innerHTML = "";
}
function testHand(){
	displayTestDie(1, 'public1', "playerDice p1Hand p2Hand", "hearts");
	displayTestDie(2, 'public2', "playerDice p1Hand p2Hand", "hearts");
	displayTestDie(3, 'public3', "playerDice p1Hand p2Hand", "hearts");
	displayTestDie(4, 'public4', "playerDice p1Hand p2Hand", "hearts");
	displayTestDie(5, 'public5', "playerDice p1Hand p2Hand", "hearts");
	displayTestDie(6, 'p1s1', "playerDice p1Hand", "hearts");
	displayTestDie(7, 'p1s2', "playerDice p1Hand", "hearts");
	displayTestDie(8, 'p2s1', "playerDice p2Hand", "hearts");
	displayTestDie(9, 'p2s2', "playerDice p2Hand", "hearts");
	
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
	if(size > 9){
	document.getElementById(location).style.backgroundImage = "url(images/diamonds.png)";
	suit = 'diamonds';
	}
	else if(size > 5){
	document.getElementById(location).style.backgroundImage = "url(images/hearts.png)";
	suit = 'hearts';
	}
	else if(size > 2){
	document.getElementById(location).style.backgroundImage = "url(images/clubs.png)";
	suit = 'clubs';
	}	
		if(number == 1){
		document.getElementById(location).innerHTML = "<h1 class='" + className + " " + suit + "'>A</h1>";
		}
		else if(number < 11){
		document.getElementById(location).innerHTML = "<h1 class='" + className + " " + suit + "'>" + number + "</h1>";
		}
		else if(number == 11){
		document.getElementById(location).innerHTML = "<h1 class='" + className + " " + suit + "'>J</h1>";
		}
		else if(number == 12){
		document.getElementById(location).innerHTML = "<h1 class='" + className + " " + suit + "'>Q</h1>";
		}
		else if(number == 13){
		document.getElementById(location).innerHTML = "<h1 class='" + className + " " + suit + "'>K</h1>";
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
function displayTestDie(size, location, className, suit){
	let number = size;
	if(suit === "diamonds"){
	document.getElementById(location).style.backgroundImage = "url(images/diamonds.png)";
	suit = 'diamonds';
	}
	else if(suit === "hearts"){
	document.getElementById(location).style.backgroundImage = "url(images/hearts.png)";
	suit = 'hearts';
	}
	else if(suit === "clubs"){
	document.getElementById(location).style.backgroundImage = "url(images/clubs.png)";
	suit = 'clubs';
	}
			if(number == 1){
		document.getElementById(location).innerHTML = "<h1 class='" + className + " " + suit + "'>A</h1>";
		}
		else if(number < 11){
		document.getElementById(location).innerHTML = "<h1 class='" + className + " " + suit + "'>" + number + "</h1>";
		}
		else if(number == 11){
		document.getElementById(location).innerHTML = "<h1 class='" + className + " " + suit + "'>J</h1>";
		}
		else if(number == 12){
		document.getElementById(location).innerHTML = "<h1 class='" + className + " " + suit + "'>Q</h1>";
		}
		else if(number == 13){
		document.getElementById(location).innerHTML = "<h1 class='" + className + " " + suit + "'>K</h1>";
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
		displayDie(getPublicDiceSize(), "public" + i, "flopDie p1Hand p2Hand");
	}
}
function turn(){
	displayDie(getPublicDiceSize(), "public4", "turnDie p1Hand p2Hand");
	openBets();
}
function river(){
	displayDie(getPublicDiceSize(), "public5", "riverDie p1Hand p2Hand");
	openBets();
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
	if(!areAllDiceChosen()){
			openFirstDieP1();
		}
		else if(!areBetsOpen() && document.getElementsByClassName("turnDie").length == 0){
			turn();
		}
		else if(!areBetsOpen() && document.getElementsByClassName("riverDie").length == 0){
			river();
		}
		else if(!areBetsOpen()){
			adjudicateHands();
		}
}
function closeP2Bets(){
	document.getElementById("p2BetInput").style.visibility = "hidden";
	document.getElementById("p2BetBtn").style.visibility = "hidden";
	if(!areAllDiceChosen()){
			openFirstDieP2();
		}
		else if(!areBetsOpen() && document.getElementsByClassName("turnDie").length == 0){
			turn();
		}
		else if(!areBetsOpen() && document.getElementsByClassName("riverDie").length == 0){
			river();
		}
		else if(!areBetsOpen()){
			adjudicateHands();
		}
}
function placeBetP1(){
	let bet = Math.abs(parseInt(document.getElementById("p1BetInput").value));
	if(document.getElementById("p1Chips").innerHTML >= bet){
		document.getElementById("p1Chips").innerHTML -= bet;
		document.getElementById("potOutput").innerHTML = bet + parseInt(document.getElementById("potOutput").innerHTML);
		closeP1Bets();
	}
	else{
		alert("Bet too large(Player 1).");
	}
}
function placeBetP2(){
	let bet = Math.abs(parseInt(document.getElementById("p2BetInput").value));
	if(document.getElementById("p2Chips").innerHTML >= bet){
		document.getElementById("p2Chips").innerHTML -= bet;
		document.getElementById("potOutput").innerHTML = bet + parseInt(document.getElementById("potOutput").innerHTML);
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
		openBets();
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
		openBets();
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
	document.getElementById("textOutput").innerHTML = "Player 1 wins the hand.";
}
function p2WinsHand(){
	let pot = parseInt(document.getElementById("potOutput").innerHTML);
	document.getElementById("p2Chips").innerHTML = parseInt(document.getElementById("p2Chips").innerHTML) + pot;
	document.getElementById("potOutput").innerHTML = 0;
	showPlayHandBtn();
	document.getElementById("textOutput").innerHTML = "Player 2 wins the hand.";
}
function adjudicateHands(){
	let player1Hand = getBestHand(1);
	let player2Hand = getBestHand(2);
	let winningHand = compareHandVaues(player1Hand, player2Hand, true);
	if(winningHand[winningHand.length - 1] == "tie"){
		splitPot();
		console.log(player1Hand);
		console.log(player2Hand);
		console.log("split");
	}
	else if(winningHand == player1Hand){
		p1WinsHand();
		console.log(player1Hand);
		console.log(player2Hand);
		console.log("P1 Wins");
	}
	else if(winningHand == player2Hand){
		p2WinsHand();
		console.log(player1Hand);
		console.log(player2Hand);
		console.log("P2 Wins");
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
	let outputIndex = 0;
	for(let i = 0; i < array.length; i++){
		output[outputIndex] = [0,""];
		output[outputIndex][1] = getDiceSuit(array[i]);
		if(array[i].innerHTML === "A"){
			output[outputIndex][0] = 14;
		}
		else if(array[i].innerHTML === "J"){
			output[outputIndex][0] = 11;
		}
		else if(array[i].innerHTML === "Q"){
			output[outputIndex][0] = 12;
		}
		else if(array[i].innerHTML === "K"){
			output[outputIndex][0] = 13;
		}
		else{
			output[outputIndex][0] = parseInt(array[i].innerHTML);
		}
		outputIndex++;
	}
	return output;
}
function getBestHand(playerNumber){
	let inputMatrix = getHandMatrix(document.getElementsByClassName("p" + playerNumber + "Hand"));
	let testMatrix = [[]];
	let currentBestHand = [0,0,0,0,0];
		/*for(let i = 0; i < inputMatrix.length -4; i++){
			for(let j = i + 1; j < inputMatrix.length -3; j++){
				for(let k = j + 1; k < inputMatrix.length -2; k++){
					for(let l = k + 1; l < inputMatrix.length -1; l++){
						for(let m = l + 1; m < inputMatrix.length; m++){
							if(areNotEqual(i,j,k,l,m)){
								testMatrix = [];
								testMatrix.push(inputMatrix[i]);
								testMatrix.push(inputMatrix[j]);
								testMatrix.push(inputMatrix[k]);
								testMatrix.push(inputMatrix[l]);
								testMatrix.push(inputMatrix[m]);
								currentBestHand = compareHandVaues(testMatrix, currentBestHand);
							}

						}
					}
					
				}
			}
		}
	console.log(currentBestHand + "5loop");
	//return currentBestHand;
	currentBestHand = [0,0,0,0,0];*/
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
function areNotEqual(i,j,k,l,m){
	if(i !== j && i !== k && i !== l && i !== m){
		if(j !== k && j !== l && j !== m){
			if(k !== l && k !== m){
				if(l !== m){
					return true;
				}
			}
		}
	}
	return false;
}
function isInvalidHand(matrix){
	for(let i = 0; i < matrix.length; i++){
		for(let j = 0; j < matrix.length; j++){
			if(matrix[i][0] === 1 && matrix[j][0] === 14){
				return true;
			}
		}
	}
	return false;
}
function getHandValue(matrix){
	let highCard = getHighCard(matrix);
	let repeats;
	if(isInvalidHand(matrix)){
		return [0,0,0,0,0];
	}
	if(isNofAKind(matrix)){
		repeats = getNOfAKind(matrix);
	} else{
		repeats = [0,0];
	}
	if(isStraight(matrix) && isFlush(matrix)){
		return [9,highCard,0,0,0];
	}
	else if(repeats[0] == 4){
		return [8,repeats[1],getHighCard(repeats[1]),0,0];
	}
	else if(isFullHouse(matrix)){
		return [7,getFullHouseTop(matrix),getFullHouseBottom(matrix),0,0];
	}
	else if(isFlush(matrix)){
		return [6,highCard,getHighCard(highCard),getHighCard(getHighCard(highCard)),getHighCard(getHighCard(highCard))];
	}
	else if(isStraight(matrix)){
		return [5,highCard,0,0,0];
	}
	else if(repeats[0] == 3){
		return [4,repeats[1],getHighCard(repeats[1]), getHighCard(getHighCard(repeats[1])),0,0];
	}
	else if(isTwoPair(matrix)){
		return [3,repeats[1],getTwoPairValue(matrix),getTwoPairKicker(matrix, repeats[1], getTwoPairValue(matrix)),0];
	}
	else if(repeats[0] == 2){
		return [2,repeats[1],getHighCard(repeats[1]),getHighCard(getHighCard(repeats[1])),getHighCard(getHighCard(getHighCard(repeats[1])))]
	}
	else{
		return [1,highCard,0,0,0];
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
function getNOfAKindKicker(matrix){
	let repeatCard = getNOfAKind(matrix)[1];
	let testMatrix = [];
	for(let i = 0; i < matrix.length; i++){
		if(matrix[i][0] !== repeatCard){
			testMatrix.push(matrix[i]);
		}
	}
	return getHighCard(testMatrix);
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
	return topCard = getNOfAKind(matrix)[1];
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
function getTwoPairValue(matrix){
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
				if(current == 14){
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









