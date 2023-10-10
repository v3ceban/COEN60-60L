function Nav() {
  const links = document.querySelectorAll("nav>ul>li>a");
  const sections = document.querySelectorAll("main>section");

  function removeClass(element) {
    element.classList.remove("active");
  }

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", () => {
      for (let j = 0; j < links.length; j++) {
        // removeClass(links[j]);
        removeClass(sections[j]);
      }
      // links[i].classList.toggle("active");
      sections[i].classList.toggle("active");
    });
  }
}

Nav();
