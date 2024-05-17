let form = document.getElementById("formulario");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  limpiarErrores();
  let textNombre = document.querySelector("#nombre").value;
  let textSubjet = document.querySelector("#asunto").value;
  let textMessage = document.querySelector("#mensaje").value;
  let resultado = validar(textNombre, textSubjet, textMessage);
  if (resultado == true) {
    exito();
  }
});

function limpiarErrores() {
  document.querySelector(".resultado").innerHTML = "";
  document.querySelector(".errorNombre").innerHTML = "";
  document.querySelector(".errorAsunto").innerHTML = "";
  document.querySelector(".errorMensaje").innerHTML = "";
}
function exito() {
  document.querySelector(".resultado").innerHTML =
    "Mensaje enviado con éxito!!!";
}
function validar(nombre, asunto, mensaje) {
  let pasamosLaValidacion = true;
  const validacionNombre = /^[a-zA-Z \.ñÑáéíóúÁÉÍÓÚ]+$/gim;

  if (validacionNombre.test(nombre) == false) {
    document.querySelector(".errorNombre").innerHTML = "El nombre es requerido";
    pasamosLaValidacion = false;
  }
  const validacionAsunto = /^[a-zA-Z \.ñÑáéíóúÁÉÍÓÚ]+$/gim;
  if (validacionAsunto.test(asunto) == false) {
    document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido";
    pasamosLaValidacion = false;
  }
  const validaciónMensaje = /^[a-zA-Z \.ñÑáéíóúÁÉÍÓÚ]+$/gim;
  if (validaciónMensaje.test(mensaje) == false) {
    document.querySelector(".errorMensaje").innerHTML =
      "El mensaje es requerido";
    pasamosLaValidacion = false;
  }
  return pasamosLaValidacion;
}