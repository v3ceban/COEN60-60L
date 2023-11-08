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
    image.classList.toggle("fade-in");
    image.setAttribute("src", `./images/${element.value}.png`);
    setTimeout(() => {
      image.classList.toggle("fade-in");
    }, 550);
  }
}

changeSelectionImages();
