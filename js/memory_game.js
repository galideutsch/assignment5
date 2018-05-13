var MemoryGame = {};
    MemoryGame.numOfCards = 12;
    MemoryGame.start = function(){
        MemoryGame.clearBoard();
        MemoryGame.generateBoard();
        document.getElementById("message").style.display = "none";
    }

