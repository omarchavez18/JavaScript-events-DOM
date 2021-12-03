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
