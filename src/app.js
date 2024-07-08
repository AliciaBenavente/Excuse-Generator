/* eslint-disable */
import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  function excuseGenerator() {
  let who = ["The weird neighbour", "Her smart cousin", "Paquito El Chocolatero", "The hot trainer"];
  let action = ["bought", "took", "ate", "stole", "got dissapointed by"];
  let what = ["a cat", "my pen", "a cactus", "a cookie", "the flatmate"];
  let where = [
    "from the market",
    "at my house",
    "at the beach",
    "in the terrace",
    "during holidays"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  let excuse = who[whoIndex] + " " + action[actionIndex] + " " + what[whatIndex] + " " + where[whereIndex];
  return excuse;
}
let frase = excuseGenerator();
document.querySelector("#excuse").innerHTML = frase;
document.querySelector("#button").addEventListener("click", function(event) {
  event.target.blur();
  frase = excuseGenerator();
  document.querySelector("#excuse").innerHTML = frase;
  console.log("frase");
})
};
