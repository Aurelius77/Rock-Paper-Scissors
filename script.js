playerPaper = document.getElementById('paper')
playerRock = document.getElementById('rock')
playerScissors = document.getElementById('scissors')


AIpaper = document.getElementById('AI-paper')
AIrock = document.getElementById('AI-rock')
AIscissors = document.getElementById('AI-scissors')

var winningText = document.getElementById('winning-text')

var playerOne = document.getElementById('player-one')

var choice;

var list = [
    AIscissors,
    AIrock,
    AIpaper
]


function paperInput(){
    playerPaper.style.backgroundColor = "red"
    playerRock.style.backgroundColor = "white"
    playerScissors.style.backgroundColor = "white"

    AIinput()

    if(choice === list[0]){
        winningText.innerHTML = "You lost"
        winningText.style.color = "red"
     }
 
     if(choice === list[1]){
         winningText.innerHTML = "You won"
         winningText.style.color = "green"
      }
 
      if(choice === list[2]){
         winningText.innerHTML = "It's a draw"
         winningText.style.color = "yellow"
      }
 




    
}

function rockInput(){
    playerRock.style.backgroundColor = "red"
    playerPaper.style.backgroundColor = "white"
    playerScissors.style.backgroundColor = "white"

    AIinput()


    if(choice === list[0]){
        winningText.innerHTML = "You won"
        winningText.style.color = "green"
     }
 
     if(choice === list[1]){
         winningText.innerHTML = "It's a draw"
         winningText.style.color = "yellow"
      }
 
      if(choice === list[2]){
         winningText.innerHTML = "You lost"
         winningText.style.color = "red"
      }
 





    
}

function scissorsInput(){
    playerScissors.style.backgroundColor = "red"
    playerRock.style.backgroundColor = "white"
    playerPaper.style.backgroundColor = "white"

    AIinput()

    if(choice === list[0]){
       winningText.innerHTML = "It's a draw"
       winningText.style.color = "yellow"
    }

    if(choice === list[1]){
        winningText.innerHTML = "You lost"
        winningText.style.color = "red"
     }

     if(choice === list[2]){
        winningText.innerHTML = "You won"
        winningText.style.color = "green"
     }

    
}












function AIinput(){
    var randomNumber = getRandomNumber()
     choice = list[randomNumber]
    choice.style.backgroundColor = "blue"

    if(choice === list[0]){
        list[1].style.backgroundColor = 'white'
        list[2].style.backgroundColor = 'white'
    }

    if(choice === list[1]){
        list[0].style.backgroundColor = 'white'
        list[2].style.backgroundColor = 'white'
    }

    if(choice===list[2]){
        list[0].style.backgroundColor = 'white'
        list[1].style.backgroundColor = 'white'
    }






}




function getRandomNumber(){
    return Math.floor(Math.random() * list.length)
}


 window.onload = function(){
   const name=  prompt('what is your name?')
   playerOne.innerHTML = name

}
