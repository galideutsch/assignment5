var MemoryGame = {};
    MemoryGame.numOfCards = 12;
    // Start game
    MemoryGame.start = function(){
        MemoryGame.clearBoard();
        MemoryGame.generateBoard();
        document.getElementById("message").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }
//Generate board
MemoryGame.generateBoard = function(){
    var cardArr = MemoryGame.generateArray(); 
    var board = document.getElementById("board");
    // Generate cards and back of card image
    for(var i = 0; i < cardArr.length; i++){
        var card = document.createElement("div");
        card.className = "card";
        card.value = cardArr[i];
        card.addEventListener("click", MemoryGame.cardClick);
        board.appendChild(card);
    }
}

MemoryGame.cardClick = function(event){
    event.target.classList.add("flipped");
    var cards = document.getElementsByClassName("card");
    var flipped = document.getElementsByClassName("flipped");
    var imgNum = event.target.value;
    var clickedCards = [];
    for (var i = 0; i < flipped.length; i++){
        event.target.style.backgroundImage = `url('./images/card${imgNum}.jpg')`;
        clickedCards.push(flipped[i]);
        
    }
    if (clickedCards.length > 1){
        document.getElementById("board").style.pointerEvents = "none";
        if (clickedCards[0].value == clickedCards[1].value){
            clickedCards[1].className = "card match";
            clickedCards[0].className = "card match";
            setTimeout(function(){
                document.getElementById("board").style.pointerEvents = "auto";
            }, 1);
            var matches = document.getElementsByClassName("card match");
                if (matches.length == MemoryGame.numOfCards){
                    document.getElementById("overlay").style.display = "block";
                }
        } else if (clickedCards[0].value !== clickedCards[1].value){
            function flipCard(){
                clickedCards[1].className = "card";
                clickedCards[0].className = "card";
                clickedCards[1].style.backgroundImage = "url('./images/card_backs.png')";
                clickedCards[0].style.backgroundImage = "url('./images/card_backs.png')";  
                document.getElementById("board").style.pointerEvents = "auto";
            }
            setTimeout(flipCard, 1000);
        }
        // clickedCards = [];
    }
}

// Generate random array
MemoryGame.generateArray = function(){
    var array = [];
    for(var i =0; i < MemoryGame.numOfCards; i++){
        array[i] = Math.floor(i * 0.5);
    }
    return array.sort (
        function(a,b){
            return 0.5 - Math.random();
        }
    );
}
// Clear Game
MemoryGame.clearBoard = function(){
    document.getElementById("board").innerHTML = "";
}
