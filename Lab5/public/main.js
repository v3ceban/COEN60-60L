const main = () => {
  const button = document.querySelector("button");
  const svg = document.querySelector("svg");

  button.addEventListener("click", () => {
    let square = document.createElement(`rect`);
    square.setAttribute("x", "0");
    square.setAttribute("y", "0");
    square.setAttribute("width", "50");
    square.setAttribute("heigth", "50");
    square.setAttribute("fill", "red");
    svg.appendChild(square);
  });
};

main();
