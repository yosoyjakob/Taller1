document.addEventListener("DOMContentLoaded", function () {

  const btnCalcular = document.getElementById("btnCalcular");
  const resultado = document.getElementById("resultado");

  btnCalcular.addEventListener("click", function () {

    const x1 = parseFloat(document.getElementById("x1").value);
    const y1 = parseFloat(document.getElementById("y1").value);
    const x2 = parseFloat(document.getElementById("x2").value);
    const y2 = parseFloat(document.getElementById("y2").value);

    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
      resultado.textContent = "Debes ingresar todas las coordenadas";
      resultado.className = "text-danger";
      return;
    }

    if (x2 === x1) {
      resultado.textContent = "La pendiente es indefinida (x2 = x1)";
      resultado.className = "text-danger";
      return;
    }

    const m = (y2 - y1) / (x2 - x1);

    resultado.textContent = "La pendiente de la recta es: " + m;
    resultado.className = "text-success";

  });

});
