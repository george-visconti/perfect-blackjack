export {handSetUp}

const Options = {
    Hit: "H",
    Stand: "S",
    Split: "P",
    DoubleHit: "D/H",
    DoubleStand: "D/S",
    SplitHit: "P/H",
    SurrenderHit: "R/H",

}

export {Options}

function mapFaceCards (card) {
    const faceCards = ["10","J","Q","K"]
    if (faceCards.includes(card)) {
        return "10";
    }
    return card;

}

function correctAnswer(dealerCard, playerCard1, playerCard2) {

    const dealerClean = mapFaceCards(dealerCard);
    const playerClean1 = mapFaceCards(playerCard1);
    const playerClean2 = mapFaceCards(playerCard2);

    if (playerClean1 === playerClean2){
        const splitAnswers = require('./splitAnswers.json');
        return splitAnswers[playerClean1][dealerClean];
    } else if (playerClean1 === "A" || playerClean2 === "A"){
        const softAnswers = require("./softAnswers.json");
        const indexCard = playerClean1 !== "A" ? playerClean1 : playerClean2;
        return softAnswers[indexCard][dealerClean];
    } else {
        const regAnswers = require("./regAnswers.json");
        const sum = String(parseInt(playerClean1) + parseInt(playerClean2));
        return regAnswers[sum][dealerClean];

    }
}

function pickCard(deck){
    const card = deck[(Math.floor(Math.random() * deck.length))];
    return card;
}

function pickSuite(){
    const suites = ["S","D","H","C"]
    const suite = suites[(Math.floor(Math.random() * suites.length))];
    return suite;

}

function isFaceCard(card){
    const faceCards = ["10","J","Q","K"]
    return faceCards.includes(card);
}


function handSetUp(){

    const fullDeck = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    const noAceDeck = ["2","3","4","5","6","7","8","9","10","J","Q","K"];
    const noFaceDeck = ["2","3","4","5","6","7","8","9","A"];

    const dealerCard = pickCard(fullDeck);
    const playerCard1 = pickCard(fullDeck);
    const playerCard2 = isFaceCard(playerCard1) ? pickCard(noAceDeck) : playerCard1 === "A" ? pickCard(noFaceDeck) : pickCard(fullDeck);
    const answer = correctAnswer(dealerCard,playerCard1,playerCard2);

    return {
        dealer: {
            value: dealerCard,
            suite: pickSuite()
            
        },
        player: {
            card1: {
                value: playerCard1,
                suite: pickSuite()
            },
            card2: {
                value: playerCard2,
                suite: pickSuite()
            },
        },
        answer: answer
    }

}
