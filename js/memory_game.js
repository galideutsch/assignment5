var MemoryGame = {};
    MemoryGame.numOfCards = 12;
    MemoryGame.start = function(){
        MemoryGame.clearBoard();
        MemoryGame.generateBoard();
        document.getElementById("message").style.display = "none";
    }

MemoryGame.generateBoard = function(){
    var cardArr = MemoryGame.generateArray(); 
    var board = document.getElementById("board");
    var board = document.getElementById("board");
    for(var i = 0; i < cardArr.length; i++){
        var card = document.createElement("div");
        card.className = "card";
        card.value = cardArr[i];
        card.style.backgroundImage = "url('./images/card_backs.png')";
        card.addEventListener("click", MemoryGame.cardClick);
        board.appendChild(card);
    }
}

MemoryGame.cardClick = function(){
    var cards = document.getElementsByClassName("flipped");
    if (cards.length > 0){
        this.classList.add("flipped");
        for(var i = 0; i < MemoryGame.numOfCards/2; i++){
            for(var j = 0; j < MemoryGame.numOfCards/2; j++){
                if(cards[i] == cards[j]){
                    cards[i].style.backgroundImage = `url('./images/card${j}.jpg')`;
                }
            }
        }
        if (cards[0].value == cards[1].value){
            cards[1].className = "card match";
            cards[0].className = "card match";
            if (document.getElementsByClassName("match").length == MemoryGame.numOfCards){
                function on() {
                    document.getElementById("overlay").style.display = "visible";
                }
            }
        } 
        else {
            cards[1].className = "card";
            cards[0].className = "card";
        }
    } else {
        this.classList.add("flipped");
    }
}

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

MemoryGame.clearBoard = function(){
    document.getElementById("board").innerHTML = "";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}