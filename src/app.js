/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let who = [
    "El mecanico",
    "La tia",
    "La vecina",
    "El bebe",
    "La trasportista"
  ];
  let action = [
    "se comio un alfajor",
    "se congeló",
    "piso un tomate",
    "estudió matematicas",
    "se bañó"
  ];
  let place = [
    "en la piscina",
    "en el metro",
    "en el tren",
    "en casa",
    "en el bosque"
  ];

  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomPlace = Math.floor(Math.random() * place.length);

  document.querySelector("#excuse").innerHTML =
    who[randomWho] + " " + action[randomAction] + " " + place[randomPlace];
};
