//alert("hola este es mi primer javascript")
let contenidoTitulo= "Oscar"

document.title = contenidoTitulo;


let nombre1="Laura";
let ciudad = "Ibaguè";
let gusto = "Perros";

let parrafo = document.getElementsByClassName ("parrafo2");

function cambiarTexto(nombre,ciudad,gusto){
    let contenido = `Me llamo ${nombre1}, naci en ${ciudad} y vivo en Ibagué, Me gustan los ${gusto} 
    y salir a pasear en días de sol`;

    return contenido;
}

parrafo.innerText = cambiarTexto(nombre1,ciudad,gusto);

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});