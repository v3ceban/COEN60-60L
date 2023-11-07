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
  if (userPlay === compPlay) {
    return "draw";
  } else if (
    (userPlay === "rock" &&
      (compPlay === "scissors" || compPlay === "lizard")) ||
    (userPlay === "paper" && (compPlay === "rock" || compPlay === "spock")) ||
    (userPlay === "scissors" &&
      (compPlay === "paper" || compPlay === "lizard")) ||
    (userPlay === "lizard" && (compPlay === "paper" || compPlay === "spock")) ||
    (userPlay === "spock" && (compPlay === "rock" || compPlay === "scissors"))
  ) {
    return "win";
  } else {
    return "lose";
  }
}

const button = document.querySelector("input[type='submit']");
button.addEventListener("click", playGame);
