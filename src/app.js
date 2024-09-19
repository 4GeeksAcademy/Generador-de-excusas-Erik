/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let who = ["El perro", "La abuela", "La vecina", "El niño", "El gato"];
  let action = [
    "se comio un pan",
    "se murió",
    "piso al gato",
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
