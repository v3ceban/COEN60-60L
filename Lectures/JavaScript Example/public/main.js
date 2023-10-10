function main() {
  const button = document.getElementById("button");
  const number = document.getElementById("number");
  let i = 0;

  button.addEventListener("click", myFunction);

  function myFunction() {
    i++;
    number.innerHTML = i;
  }
}

main();
