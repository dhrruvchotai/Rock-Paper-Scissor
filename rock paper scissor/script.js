let userCount = document.querySelector(".score-user")
let compCount = document.querySelector(".score-comp")
let obtn = document.querySelector(".obtn")
let resetButton = document.getElementById('resetbtn');

const clickSound = document.getElementById('click-sound');
const winSound = document.getElementById('win-sound');
const loseSound = document.getElementById('lose-sound');
const drawSound = document.getElementById('draw-sound');

let uScore = 0;
let cScore = 0;

let genrateCompChoice = ()=>{

    let random = ((Math.random()*3))+1;
    let comNo = Math.floor(random)
    let comChoice = " "
    if(comNo == 1){
        comChoice = "rock"
    }
    else if(comNo == 2){
        comChoice = "paper"
    }
    else if(comNo == 3){
        comChoice = "scissor"
    }

    return comChoice
}



let userChoice = "null"
let options = document.querySelectorAll(".option")//it gives array of option here size is 3

options.forEach((choice)=>{
        choice.addEventListener("click",()=>{
          clickSound.play()
        userChoice = choice.getAttribute("id")
        play(userChoice)
    })
})


let play = (userChoice) =>{
  let computer = genrateCompChoice()

  if(userChoice === computer){
    drawSound.play();
   obtn.innerText = "Match Draw!"
   obtn.style.color = "white"
   obtn.style.backgroundColor = "#003049"
  }

  else if((userChoice === "rock") && (computer === "scissor")){
    winSound.play();
    obtn.innerText = "Hurrah! You Won. Rock beated Scissor!"
    obtn.style.color = "white"
    obtn.style.backgroundColor = "green"
    uScore++
    userCount.innerText = uScore
  }

  else if((computer === "rock") && (userChoice === "scissor")){
    loseSound.play();
    obtn.innerText = "You Lose the Game! Scissor Can't beat Rock!"
    obtn.style.color = "white"
    obtn.style.backgroundColor = "red"
    cScore++
    compCount.innerText = cScore
  }

  else if((userChoice === "scissor") && (computer === "paper")){
    winSound.play();
    obtn.innerText = "Hurrah! You Won. Scissor beated Paper!"
    obtn.style.color = "white"
    obtn.style.backgroundColor = "green"
    uScore++
    userCount.innerText = uScore
  }

  else if((computer === "scissor") && (userChoice === "paper")){
    loseSound.play();
    obtn.innerText = "You Lose the Game! Paper Can't beat Scissor!"
    obtn.style.color = "white"
    obtn.style.backgroundColor = "red"
    cScore++
    compCount.innerText = cScore
  }

  else if((userChoice === "paper") && (computer === "rock")){
    winSound.play();
    obtn.innerText = "Hurrah! You Won. Paper beated Rock!"
    obtn.style.color = "white"
    obtn.style.backgroundColor = "green"
    uScore++
    userCount.innerText = uScore
  }

  else if((computer === "paper") && (userChoice === "rock")){
    loseSound.play();
    obtn.innerText = "You Lose the Game! Scissor Can't beat Paper!"
    obtn.style.color = "white"
    obtn.style.backgroundColor = "red"
    cScore++
    compCount.innerText = cScore
  }


}

resetButton.addEventListener('click', () => {
  clickSound.play()
  uScore = 0
  userCount.innerText = uScore
  cScore = 0
  compCount.innerText = cScore
});