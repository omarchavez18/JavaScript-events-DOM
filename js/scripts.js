// Para seleccionar contenido hay 3 formas.
//querySelector //retorna 0 o 1 elementos.
const heading = document.querySelector(".header__texto h2");
heading.textContent = "Nuevo Heading";
heading.classList.add("nueva-clase");
console.log(heading);

//querySelectorAll
//retorna todos los elementos que concuerden con los parametros dados.
const enlaces = document.querySelectorAll(".navegacion a");
enlaces[0].textContent = "nuevo texto para enlace";
enlaces[0].classList.add("nueva-clase");

//Generar un nuevo enlace
// al crear algo de html siempre inicia con 'document', lo que se desea crear debe de ir en mayusculas.
const nuevoEnlace = document.createElement("A");
console.log(nuevoEnlace);

//en consola solo aparece la etiqueta <a></a> por lo que le falta la direccion href el texto etc..
// y esto tenemos que agregarlo

//agregar el href.
nuevoEnlace.href = "nuevo-enlace.html";

//agregar el texto.
nuevoEnlace.textContent = "Tienda virtual";

//agregar la clase.
nuevoEnlace.classList.add("navegacion__enlace");

//falta agregarlo al documento. y hay que indicarle al JS donde queremos agregarlo.
//lo agregaremos a la seccion inicial de navegacion.
const navegacion = document.querySelector(".navegacion");

//.appendChild es una funcion que nos permite agregar un elemento e insertarlo en otro lugar.
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

//eventos.

console.log(1);

//forma para registrar los eventos es addEventListener

window.addEventListener("load", function () {
  // load espera que el JS css todos los archivos que dependen del html se descarguen para ejecutar el codigo, a diferencia de DOMContentLoaded

  console.log(2);
});

window.onload = function () {
  // esta es otra forma igual de escribir el de arriba, y se ejecutan al mismo tiempo
  console.log(3);
};

document.addEventListener("DOMContentLoaded", function () {
  // normalmente se utiliza "DOMContentLoaded"
  //DOMContentLoaded solo espera a que se descargue el html no espera ni css ni imagenes etc, por eso se ejecuta primero que 'load'
  console.log(4);
});
console.log(5);

window.onscroll = function () {
  // esta funcion se ejecuta cuando le damos scroll a la pagina.
  console.log("scrolling...");
};

// seleccionar elementos del html y registrarle o asociarles un evento.

const btnEnviar = document.querySelector(".boton--primario"); // aqui se selecciono el boton de enviar del html
btnEnviar.addEventListener("click", function (evento) {
  console.log(evento.target); // el '.target' nos esta indicando a que le dimos click

  evento.preventDefault(); // preventDefault nos impide llevar acabo la accion original del elemento asociado del html.

  //preventDefault es especialmente util para la validacion de formularios, solo permitiendo dar click a enviar o submit cuando este llenado.

  console.log("diste click al boton de ENVIAR");

  console.log("enviando formulario");
});
