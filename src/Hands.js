export {PlayersHand,DealersHand}


// A component that will either display a face down card
// or will parse a card object and display a card with a value
// and suite
function Card({cardObj,faceDown=false}){

    if (faceDown) {
      return (
        <img
          src={"/perfect-blackjack/Blue_Back.svg"}
          alt="card"
        />
      )
  
    }
    const url = "/perfect-blackjack/" + cardObj.value + cardObj.suite + ".svg";
    return (
      <img 
        src={url} 
        alt="card" />
    )
  }


// A component that will display the text 'Dealer's Hand'
// and a card face up and another face down
function DealersHand({card}){

    return(
      <>
        <h1 className="font-bold text-3xl text-center">Dealer's Hand</h1>
          <div className="flex flex-row"> 
            <Card cardObj={card}/>
            <Card faceDown={true}/>
          </div>
      </>
    )
}

// A component that will display the text 'Player's Hand'
// and two cards face up
function PlayersHand({card1, card2}) {

    return(
      <>
        <h1 className="font-bold text-3xl text-center">Players's Hand</h1>
          <div className="flex flex-row"> 
            <Card cardObj={card1}/>
            <Card cardObj={card2}/>
          </div>
      </>
    )
}


