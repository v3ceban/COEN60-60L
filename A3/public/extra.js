// some extra functions

// changes selection image every time user makes a new selection
function changeSelectionImages() {
  const radios = document.querySelectorAll("span.choice input[type='radio']");
  const image = document.querySelectorAll("img")[0];

  // set image to the currently active selection
  // necessary to keep relevan image on refresh
  for (let i = 0; i < radios.length; i++) {
    const element = radios[i];
    if (element.checked) {
      image.setAttribute("src", `./images/${element.value}.png`);
      break;
    }
  }

  // adds event listener to all radio buttons
  // labels don't need listeners as click on them triggers radio click
  for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", () => {
      switchImage(radios[i]);
    });
  }

  // switches image and plays animation
  function switchImage(element) {
    image.classList.remove("fade-in");
    void image.offsetWidth; // necessary to reset css animation on class toggle
    image.classList.add("fade-in");

    image.setAttribute("src", `./images/${element.value}.png`);
  }
}

// displays the rules in modal on button click and hides them on click on modal
function displayRules() {
  const button = document.querySelector(".rules");
  const container = document.querySelector(".container");

  let rules = document.createElement("div");
  let image = document.createElement("img");

  rules.classList.add("modal");
  rules.appendChild(image);

  image.setAttribute("alt", "rules set");
  image.setAttribute("src", "./images/rules.png");

  button.addEventListener("click", () => {
    container.prepend(rules);
  });
  rules.addEventListener("click", () => {
    container.removeChild(rules);
  });
}

displayRules();
changeSelectionImages();
