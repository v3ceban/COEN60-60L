// get user name and greet them
const userName = prompt("Please enter your name:");
if (userName == "") {
  document.querySelector("h1 .name").innerHTML = "anonimous user";
} else {
  document.querySelector("h1 .name").innerHTML = userName;
}

// get the variables for the game
const radios = document.querySelectorAll("input[type='radio']");
const gameVars = [];
for (let i = 0; i < radios.length; i++) {
  const element = radios[i];
  gameVars.push(element.value);
}

// set variables for history
var numPlays = 0;
var selectionHistoryNum = [0, 0, 0, 0, 0];

// event listener for the play button that starts the game on click
document.querySelector("input[type='submit']").addEventListener("click", play);

// main play function that calls everything else
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

// gets and returns user's choice
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

// generates computer's choice randomly
function comp() {
  let compPlay = Math.floor(Math.random() * radios.length);
  return gameVars[compPlay];
}

// updates the text on page based on user and computer choices
function update(userPlay, compPlay) {
  const computerSelection = document.querySelectorAll(".computer-selection");
  const selectionHistory = document.querySelectorAll(".selection");
  const result = document.querySelector(".result");

  // updates user field and all computer fields
  document.querySelector(".user-selection").innerHTML = userPlay;
  for (let i = 0; i < computerSelection.length; i++) {
    const element = computerSelection[i];
    element.innerHTML = compPlay;
  }

  // updates the number of plays
  document.querySelector(".history").innerHTML = ++numPlays;

  // calls compare function to call the result
  result.innerHTML = "you " + compare(userPlay, compPlay);

  // updates computer selection history
  for (let i = 0; i < gameVars.length; i++) {
    const element = gameVars[i];
    if (element == compPlay) {
      selectionHistoryNum[i]++;
      selectionHistory[i].innerHTML = selectionHistoryNum[i];
    }
  }

  // changes image to represent the result
  changeResultImages(result.innerHTML);
}

// compares user and computer choices and return the result of the game
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

// updates the image based on game result
function changeResultImages(result) {
  const image = document.querySelectorAll("img")[1];

  // toggles animation class on every button click
  image.classList.remove("fade-in");
  void image.offsetWidth; // necessary to reset css animation
  image.classList.add("fade-in");

  if (result.includes("win")) {
    image.setAttribute("src", "./images/win.png");
  } else if (result.includes("lose")) {
    image.setAttribute("src", "./images/lose.png");
  } else {
    image.setAttribute("src", "./images/tie.png");
  }
}
