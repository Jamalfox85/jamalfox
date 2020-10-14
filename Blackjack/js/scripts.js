player_score = 0;
house_score = 0;
hand = 0;
acehand = hand + 10;
function start () {
    reset();
    var card1 = "card1"
    var card2 = "card2"
    var card1num = Math.floor((Math.random() * 13) + 1);
    var card2num = Math.floor((Math.random() * 13) + 1);
    var card1suit = Math.floor(Math.random() * 4);
    var card2suit = Math.floor(Math.random() * 4);
    selectcard(card1, card1num, card1suit);
    selectcard(card2, card2num, card2suit);
    document.getElementById("startbutton").innerHTML="Start Over";
    blackJack();
}
function reset() {
    hand = 0;
    acehand = 0;
    cards = document.getElementById("handcards").childElementCount
    document.getElementById("result").style.visibility = "hidden";
    document.getElementById("acehand").style.visibility = "hidden";
}
function blackJack() {
    if (acehand == 21) {
        document.getElementById("result").innerHTML = "BlackJack! You Win!";
        document.getElementById("result").style.visibility = "visible";
        playerWins();
    }
}
function hitMe() {
    var nextCard = document.createElement("img");
    card = Math.floor(Math.random() * 52);
    switch (card) {
        case 0:
            nextCard.src = "images/AC.png";
            aceinhand();
            break;
        case 1:
            nextCard.src = "images/AD.png";
            aceinhand();
            break;
        case 2:
            nextCard.src = "images/AH.png";
            aceinhand();
            break;
        case 3:
            nextCard.src = "images/AS.png";
            aceinhand();
            break;
        case 4:
            nextCard.src = "images/2C.png";
            hand += 2;
            break;
        case 5:
            nextCard.src = "images/2D.png";
            hand += 2;
            break;
        case 6:
            nextCard.src = "images/2H.png";
            hand += 2;
            break;
        case 7:
            nextCard.src = "images/2S.png";
            hand += 2;
            break;
        case 8:
            nextCard.src = "images/3C.png";
            hand += 3;
            break;
        case 9:
            nextCard.src = "images/3D.png";
            hand += 3;
            break;
        case 10:
            nextCard.src = "images/3H.png";
            hand += 3;
            break;
        case 11:
            nextCard.src = "images/3S.png";
            hand += 3;
            break;
        case 12:
            nextCard.src = "images/4C.png";
            hand += 4;
            break;
        case 13:
            nextCard.src = "images/4D.png";
            hand += 4;
            break;
        case 14:
            nextCard.src = "images/4H.png";
            hand += 4;
            break;
        case 15:
            nextCard.src = "images/4S.png";
            hand += 4;
            break;
        case 16:
            nextCard.src = "images/5C.png";
            hand += 5;
            break;
        case 17:
            nextCard.src = "images/5D.png";
            hand += 5;
            break;
        case 18:
            nextCard.src = "images/A5H.png";
            hand += 5;
            break;
        case 19:
            nextCard.src = "images/5S.png";
            hand += 5;
            break;
        case 20:
            nextCard.src = "images/6C.png";
            hand += 6;
            break;
        case 21:
            nextCard.src = "images/6D.png";
            hand += 6;
            break;
        case 22:
            nextCard.src = "images/6H.png";
            hand += 6;
            break;
        case 23:
            nextCard.src = "images/6S.png";
            hand += 6;
            break;
        case 24:
            nextCard.src = "images/7C.png";
            hand += 7;
            break;
        case 25:
            nextCard.src = "images/7D.png";
            hand += 7;
            break;
        case 26:
            nextCard.src = "images/7H.png";
            hand += 7;
            break;
        case 27:
            nextCard.src = "images/7S.png";
            hand += 7;
            break;
        case 28:
            nextCard.src = "images/8C.png";
            hand += 8;
            break;
        case 29:
            nextCard.src = "images/8D.png";
            hand += 8;
            break;
        case 30:
            nextCard.src = "images/8H.png";
            hand += 8;
            break;
        case 31:
            nextCard.src = "images/8S.png";
            hand += 8;
            break;
        case 32:
            nextCard.src = "images/9C.png";
            hand += 9;
            break;
        case 33:
            nextCard.src = "images/9D.png";
            hand += 9;
            break;
        case 34:
            nextCard.src = "images/9H.png";
            hand += 9;
            break;
        case 35:
            nextCard.src = "images/9S.png";
            hand += 9;
            break;
        case 36:
            nextCard.src = "images/10C.png";
            hand += 10;
            break;
        case 37:
            nextCard.src = "images/10D.png";
            hand += 10;
            break;
        case 38:
            nextCard.src = "images/10H.png";
            hand += 10;
            break;
        case 39:
            nextCard.src = "images/10S.png";
            hand += 10;
            break;
        case 40:
            nextCard.src = "images/JC.png";
            hand += 10;
            break;
        case 41:
            nextCard.src = "images/JD.png";
            hand += 10;
            break;
        case 42:
            nextCard.src = "images/JH.png";
            hand += 10;
            break;
        case 43:
            nextCard.src = "images/JS.png";
            hand += 10;
            break;
        case 44:
            nextCard.src = "images/QC.png";
            hand += 10;
            break;
        case 45:
            nextCard.src = "images/QD.png";
            hand += 10;
            break;
        case 46:
            nextCard.src = "images/QH.png";
            hand += 10;
            break;
        case 47:
            nextCard.src = "images/QS.png";
            hand += 10;
            break;
        case 48:
            nextCard.src = "images/KC.png";
            hand += 10;
            break;
        case 49:
            nextCard.src = "images/KD.png";
            hand += 10;
            break;
        case 50:
            nextCard.src = "images/KH.png";
            hand += 10;
            break;
        case 51:
            nextCard.src = "images/KS.png";
            hand += 10;
            break;
    }
    document.getElementById("handcards").appendChild(nextCard);
    document.getElementById("hand").innerHTML = hand;
    document.getElementById("acehand").innerHTML = acehand;
    checkWin();
}


function stay() {
    if (acehand >= 18 || hand >= 18) {
        document.getElementById("result").innerHTML = "You Win!";
        document.getElementById("result").style.visibility = "visible";
        playerWins();
    } else {
        document.getElementById("result").innerHTML = "You Lose...";
        document.getElementById("result").style.visibility = "visible";
        houseWins();
    }
}
function aceinhand() {
    hand += 1;
    acehand = hand + 10;
    document.getElementById("acehand").style.visibility = "visible";
}

function checkWin() {
    if (hand > 21) {
        document.getElementById("result").innerHTML = "BUST! You Lose...";
        document.getElementById("result").style.visibility = "visible";
        houseWins();
    }else if (acehand >= 18 || hand >= 18) {
        document.getElementById("result").innerHTML = "You Win!";
        document.getElementById("result").style.visibility = "visible";
        playerWins();
    }
}
function playerWins() {
    player_score += 1;
    document.getElementById("player_score").innerHTML = player_score;
}
function houseWins() {
    house_score += 1;
    document.getElementById("house_score").innerHTML = house_score;
}

function selectcard(cardnum, card, suit) {
    switch (card) {
        case 1:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/AC.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/AD.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/AH.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/AS.png';
                    break;
            }
            aceinhand();
            break;
        case 2:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/2C.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/2D.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/2H.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/2S.png';
                    break;
            }
            hand += 2;
            break;
        case 3:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/3C.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/3D.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/3H.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/3S.png';
                    break;
            }
            hand += 3;
            break;
        case 4:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/4C.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/4D.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/4H.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/4S.png';
                    break;
            }
            hand += 4;
            break;
        case 5:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/5C.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/5D.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/5H.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/5S.png';
                    break;
            }
            hand += 5;
            break;
        case 6:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/6C.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/6D.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/6H.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/6S.png';
                    break;
            }
            hand += 6;
            break;
        case 7:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/7C.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/7D.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/7H.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/7S.png';
                    break;
            }
            hand += 7;
            break;
        case 8:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/8C.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/8D.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/8H.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/8S.png';
                    break;
            }
            hand += 8;
            break;
        case 9:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/9C.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/9D.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/9H.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/9S.png';
                    break;
            }
            hand += 9;
            break;
        case 10:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/10C.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/10D.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/10H.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/10S.png';
                    break;
            }
            hand += 10;
            break;
        case 11:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/JC.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/JD.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/JH.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/JS.png';
                    break;
            }
            hand += 10;
            break;
        case 12:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/QC.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/QD.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/QH.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/QS.png';
                    break;
            }
            hand += 10;
            break;
        case 13:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/KC.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/KD.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/KH.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/KS.png';
                    break;
            }
            hand += 10;
            break;
    }
    document.getElementById("hand").innerHTML = hand;
    document.getElementById("acehand").innerHTML = acehand;
}
