const suits = ["jack", "queen", "king"];
const data = [5, 8, -2, 100, -20, 15, 10];
const body = document.querySelector("body");

for (let i = 0; i < 5; i++) {
  let randSuit = suits[Math.floor(Math.random() * 3)];
  body.innerHTML += `${randSuit} `;
}

var Pos = [],
  Neg = [];

for (let i = 0; i < data.length; i++) {
  const elt = data[i];
  if (elt >= 0) {
    Pos.push(elt);
  } else {
    Neg.push(elt);
  }
}

body.innerHTML += `
  <p>There are ${Pos.length} positive values: ${Pos.join(" ")}</p>
  <p>There are ${Neg.length} negative values: ${Neg.join(" ")}</p>
`;
