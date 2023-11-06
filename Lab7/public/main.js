const userName = prompt("Please enter your name:");
document.querySelector("h1 .name").innerHTML = userName;

const radios = document.querySelectorAll("input[type='radio']");
const gameVars = [];
for (let i = 0; i < radios.length; i++) {
  const element = radios[i];
  gameVars.push(element.value);
}
var numPlays = 0;

function playGame(e) {
  e.preventDefault();
  let userPlay = getUserPlay();
  let compPlay = getCompPlay();
  if (userPlay == null) {
    alert("You have to select a value");
  } else {
    document.querySelector("#user-selection").innerHTML = userPlay;
    document.querySelector("#computer-selection").innerHTML = compPlay;
    document.querySelector(".history>span").innerHTML = ++numPlays;
    document.querySelector(".result>span").innerHTML =
      "you " + getResult(userPlay, compPlay);
  }
}

function getUserPlay() {
  let userPlay = null;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      userPlay = radios[i].value;
      break;
    }
  }
  return userPlay;
}

function getCompPlay() {
  let compPlay = Math.floor(Math.random() * radios.length);
  return gameVars[compPlay];
}

function getResult(userPlay, compPlay) {
  switch (userPlay) {
    case "rock": //0
      if (compPlay == gameVars[2] || compPlay == gameVars[3]) {
        return "win";
      } else if (compPlay == gameVars[4] || compPlay == gameVars[1]) {
        return "lose";
      } else {
        return "draw";
      }

    case "paper": //1
      if (compPlay == gameVars[0] || compPlay == gameVars[4]) {
        return "win";
      } else if (compPlay == gameVars[2] || compPlay == gameVars[3]) {
        return "lose";
      } else {
        return "draw";
      }

    case "scissors": //2
      if (compPlay == gameVars[1] || compPlay == gameVars[3]) {
        return "win";
      } else if (compPlay == gameVars[0] || compPlay == gameVars[4]) {
        return "lose";
      } else {
        return "draw";
      }

    case "lizard": //3
      if (compPlay == gameVars[1] || compPlay == gameVars[4]) {
        return "win";
      } else if (compPlay == gameVars[0] || compPlay == gameVars[2]) {
        return "lose";
      } else {
        return "draw";
      }

    case "spok": //4
      if (compPlay == gameVars[0] || compPlay == gameVars[2]) {
        return "win";
      } else if (compPlay == gameVars[1] || compPlay == gameVars[3]) {
        return "lose";
      } else {
        return "draw";
      }
  }
}

const button = document.querySelector("input[type='submit']");
button.addEventListener("click", playGame);
