function main() {
  const button = document.querySelectorAll("button");
  const number = document.querySelector(".number");
  const history = document.querySelector(".history");

  function randomNum(x) {
    return Math.floor(Math.random() * x) + 1;
  }

  button[0].addEventListener("click", () => {
    number.style = "color: black";
    let x = randomNum(10);
    number.innerHTML = "Number: " + x;
    history.innerHTML += x + " ";
  });
  button[1].addEventListener("click", () => {
    number.style = "color: black";
    let array = [];
    number.innerHTML = "5 Numbers: ";
    for (let i = 0; i < 5; i++) {
      array[i] = randomNum(10);
      number.innerHTML += array[i] + " ";
      history.innerHTML += array[i] + " ";
    }
  });
  button[2].addEventListener("click", () => {
    number.style = "color: black";
    let array = [];
    number.innerHTML = "100 Numbers (why?): ";
    for (let i = 0; i < 100; i++) {
      array[i] = randomNum(10);
      number.innerHTML += array[i] + " ";
      history.innerHTML += array[i] + " ";
    }
  });
  button[3].addEventListener("click", () => {
    let chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let color = "#";
    number.innerHTML = "Color: ";
    for (let i = 0; i < 6; i++) {
      color += chars[randomNum(15)];
    }
    number.innerHTML += color;
    number.style = `color: ${color}`;
  });
}
main();
