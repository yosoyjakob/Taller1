const btnCalcular = document.getElementById("btnCalcular");
const inputEdad = document.getElementById("edad");
const resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", function () {

  const edad = parseInt(inputEdad.value);

  if (isNaN(edad) || edad < 0) {
    resultado.textContent = "Por favor ingresa una edad válida";
    resultado.className = "text-danger";
    return;
  }

  let costo = "";

  if (edad > 1 && edad < 4) {
    costo = "Entrada GRATIS 🎉";
  } else if (edad >= 4 && edad <= 8) {
    costo = "Debe pagar $2";
  } else if (edad >= 9 && edad <= 16) {
    costo = "Debe pagar $5";
  } else if (edad >= 17 && edad <= 35) {
    costo = "Debe pagar $7";
  } else if (edad > 35) {
    costo = "Debe pagar $10";
  } else {
    costo = "Edad no válida para ingresar";
  }

  resultado.textContent = costo;
  resultado.className = "text-success";

});
