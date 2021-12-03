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
