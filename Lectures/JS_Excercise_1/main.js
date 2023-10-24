var suits = ["jack", "queen", "king"];
const body = document.querySelectorAll("body")[0];

for (let i = 0; i < 5; i++) {
  let randSuit = suits[Math.floor(Math.random() * 3)];
  body.innerHTML += randSuit + " ";
}
