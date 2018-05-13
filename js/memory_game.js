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

