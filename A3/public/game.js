const userName = prompt("Please enter your name:");
document.querySelector("h1 .name").innerHTML = userName;

const radios = document.querySelectorAll("input[type='radio']");
const gameVars = [];
for (let i = 0; i < radios.length; i++) {
  const element = radios[i];
  gameVars.push(element.value);
}

var numPlays = 0;
var selectionHistoryNum = [0, 0, 0, 0, 0];

const button = document.querySelector("input[type='submit']");
button.addEventListener("click", play);

function user() {
  let userPlay = null;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      userPlay = radios[i].value;
      break;
    }
  }
  return userPlay;
}

function comp() {
  let compPlay = Math.floor(Math.random() * radios.length);
  return gameVars[compPlay];
}

function compare(userPlay, compPlay) {
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

function changeResultImages(result) {
  const image = document.querySelectorAll("img")[1];
  if (result.includes("win")) {
    image.setAttribute("src", "./images/win.png");
  } else if (result.includes("lose")) {
    image.setAttribute("src", "./images/lose.png");
  } else {
    image.setAttribute("src", "./images/tie.png");
  }
}

function update(userPlay, compPlay) {
  const userSelection = document.querySelector(".user-selection");
  const computerSelection = document.querySelectorAll(".computer-selection");
  const history = document.querySelector(".history");
  const result = document.querySelector(".result");
  const selectionHistory = document.querySelectorAll(".selection");

  userSelection.innerHTML = userPlay;
  for (let i = 0; i < computerSelection.length; i++) {
    const element = computerSelection[i];
    element.innerHTML = compPlay;
  }
  history.innerHTML = ++numPlays;
  result.innerHTML = "you " + compare(userPlay, compPlay);
  for (let i = 0; i < gameVars.length; i++) {
    const element = gameVars[i];
    if (element == compPlay) {
      selectionHistoryNum[i]++;
      selectionHistory[i].innerHTML = selectionHistoryNum[i];
    }
  }
  changeResultImages(result.innerHTML);
}

function play(e) {
  e.preventDefault();
  let userPlay = user();
  let compPlay = comp();
  if (userPlay == null) {
    alert("You have to select a value");
  } else {
    update(userPlay, compPlay);
  }
}
