function main() {
  const p = document.getElementById("demo");
  const button = document.querySelector("#button");
  var name = window.prompt("please enter your name: ");
  var x = 0;
  button.addEventListener("click", () => {
    x++;
    p.innerHTML = "Button was pressed " + x + " times!";
  });
  p.innerHTML = "Hello, " + name + ", please press the button!";
}

main();
