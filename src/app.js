/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//se ejecuta la funcion al cargar la pagina
window.onload = function() {
  //llamamos a la funcion generarCarta para mostrar una carta al cargar

  generarCarta();
  // añado un evento al boton con id "boton-generar" para obtener una carta al click
  document
    .getElementById("boton-generar")
    .addEventListener("click", generarCarta);
};
document
  .getElementById("ajustar-dimensiones")
  .addEventListener("click", ajustarDimensiones);
//funcion que genera una carta aleatoria
function generarCarta() {
  //defino las variables que contienen los palos y los valores
  const palos = ["pica", "trebol", "corazon", "diamante"];
  const valores = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  // se genera un palo aleatorio y se lo asigno a "paloAleatorio"
  const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
  // se genera un numero aleatorio y se lo asigno valorAleatorio
  const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];
  // obtenemos el elemento que contiene el id 'card'
  const cartaDiv = document.getElementById("card");
  // obtenemos el elemento donde mostraremos el valor de la carta
  const numeroCentro = document.getElementById("numero-centro");
  // obtenemos el elemento donde mostraremos el palo de arriba izqda
  const paloArriba = document.getElementById("palo-arriba");
  // obtenemos el elemento donde mostraremos el palo de abajo drcha
  const paloAbajo = document.getElementById("palo-abajo");
  // cambiamos las clases del elemento "cartaDiv" para aplicar estilos con (className)
  cartaDiv.className = `card ${paloAleatorio}`;
  // establecemos el texto del centro de la carta con "valorAleatorio"
  numeroCentro.textContent = valorAleatorio;
  // defino un objeto con los simbolos correspondientes a cada palo
  const simbolos = {
    pica: "♠",
    trebol: "♣",
    corazon: "♥",
    diamante: "♦"
  };
  //obtenemos el simbolo del paloAleatorio
  const simbolo = simbolos[paloAleatorio];

  paloArriba.textContent = simbolo;
  paloAbajo.textContent = simbolo;
}
function ajustarDimensiones() {
  const anchoInput = document.getElementById("ancho-carta").value;
  const altoInput = document.getElementById("alto-carta").value;
  const cartaDiv = document.getElementById("card");
  if (anchoInput) {
    cartaDiv.style.width = `${anchoInput}px`;
  }
  if (altoInput) {
    cartaDiv.style.height = `${altoInput}px`;
  }
}

console.log("Hello Rigo from the console!");
