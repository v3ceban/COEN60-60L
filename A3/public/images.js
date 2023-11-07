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
