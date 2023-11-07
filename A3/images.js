function changeSelectionImages() {
  const radios = document.querySelectorAll("span.choice input[type='radio']");
  const image = document.querySelectorAll("img")[0];

  for (let i = 0; i < radios.length; i++) {
    const element = radios[i];
    if (element.checked) {
      image.setAttribute("src", `./images/${element.value}.png`);
      break;
    }
  }

  for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", () => {
      switchImage(radios[i]);
    });
  }

  function switchImage(element) {
    image.setAttribute("src", `./images/${element.value}.png`);
  }
}

changeSelectionImages();

export function changeResultImages(result) {
  const image = document.querySelectorAll("img")[1];
  if (result.includes("win")) {
    image.setAttribute("src", "./images/win.png");
  } else if (result.includes("lose")) {
    image.setAttribute("src", "./images/lose.png");
  } else {
    image.setAttribute("src", "./images/tie.png");
  }
}
