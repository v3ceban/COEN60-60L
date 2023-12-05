const squareArray = document.querySelectorAll("rect");

for (let i = 0; i < squareArray.length; i++) {
  const square = squareArray[i];
  square.setAttribute("x", Math.floor(Math.random() * 300));
  square.setAttribute("y", Math.floor(Math.random() * 300));
  square.setAttribute(
    "fill",
    `rgb(
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)}
    )`,
  );
}
