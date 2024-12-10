/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Se ejecuta la función al cargar la página
window.onload = function() {
  // Llamamos a la función generarCarta para mostrar una carta al cargar
  generarCarta();

  // Añadimos un evento al botón con ID "boton-generar" para generar una carta al hacer clic
  document
    .getElementById("boton-generar")
    .addEventListener("click", function() {
      generarCarta();
      ajustarDimensiones(); // Ajustar las dimensiones después de generar una carta nueva
    });

  // Añadimos un evento al botón con ID "ajustar-dimensiones" para ajustar las dimensiones al hacer clic
  document
    .getElementById("ajustar-dimensiones")
    .addEventListener("click", ajustarDimensiones);

  // Configuramos un temporizador para generar una nueva carta cada 10 segundos
  setInterval(function() {
    generarCarta();
    ajustarDimensiones(); // Ajustar las dimensiones después de generar una carta nueva
  }, 10000);
};

// Función que genera una carta aleatoria
function generarCarta() {
  // Definimos las variables que contienen los palos y los valores
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

  // Generamos un palo aleatorio y se lo asignamos a "paloAleatorio"
  const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];

  // Generamos un número aleatorio y se lo asignamos a "valorAleatorio"
  const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

  // Obtenemos el elemento que contiene el ID 'card'
  const cartaDiv = document.getElementById("card");

  // Obtenemos el elemento donde mostraremos el valor de la carta
  const numeroCentro = document.getElementById("numero-centro");

  // Obtenemos el elemento donde mostraremos el palo de arriba izquierda
  const paloArriba = document.getElementById("palo-arriba");

  // Obtenemos el elemento donde mostraremos el palo de abajo derecha
  const paloAbajo = document.getElementById("palo-abajo");

  // Cambiamos las clases del elemento "cartaDiv" para aplicar estilos con (className)
  cartaDiv.className = `card ${paloAleatorio}`;

  // Establecemos el texto del centro de la carta con "valorAleatorio"
  numeroCentro.textContent = valorAleatorio;

  // Definimos un objeto con los símbolos correspondientes a cada palo
  const simbolos = {
    pica: "♠",
    trebol: "♣",
    corazon: "♥",
    diamante: "♦"
  };

  // Obtenemos el símbolo del paloAleatorio
  const simbolo = simbolos[paloAleatorio];

  // Establecemos el texto de los elementos "paloArriba" y "paloAbajo" con el símbolo correspondiente
  paloArriba.textContent = simbolo;
  paloAbajo.textContent = simbolo;

  // Ajustar las dimensiones después de generar la carta
  ajustarDimensiones();
}

// Función para ajustar las dimensiones de la carta
function ajustarDimensiones() {
  // Obtenemos los valores de los inputs de ancho y alto
  const anchoInput = document.getElementById("ancho-carta").value;
  const altoInput = document.getElementById("alto-carta").value;

  // Obtenemos el elemento de la carta
  const cartaDiv = document.getElementById("card");

  // Si se proporciona un valor de ancho, lo aplicamos al estilo del elemento carta
  if (anchoInput) {
    cartaDiv.style.width = `${anchoInput}px`;
  }

  // Si se proporciona un valor de alto, lo aplicamos al estilo del elemento carta
  if (altoInput) {
    cartaDiv.style.height = `${altoInput}px`;
  }
}

console.log("Hello Rigo from the console!");
