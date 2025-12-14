document.addEventListener("DOMContentLoaded", function () {

  const btnEvaluar = document.getElementById("btnEvaluar");
  const resultado = document.getElementById("resultado");

  btnEvaluar.addEventListener("click", function () {

    const temperatura = parseFloat(document.getElementById("temperatura").value);
    const humedad = parseFloat(document.getElementById("humedad").value);

    if (isNaN(temperatura) || isNaN(humedad)) {
      resultado.textContent = "Debes ingresar temperatura y humedad";
      resultado.className = "text-danger";
      return;
    }

    let mensaje = "";

    if (temperatura < 10) {
      mensaje = "Clima frío";
    } else if (temperatura >= 10 && temperatura <= 25 && humedad < 60) {
      mensaje = "Clima templado y seco";
    } else if (temperatura >= 10 && temperatura <= 25 && humedad >= 60) {
      mensaje = "Clima templado y húmedo";
    } else if (temperatura >= 26 && temperatura <= 35) {
      mensaje = "Clima cálido";
    } else if (temperatura > 35) {
      mensaje = "Clima caluroso extremo, mantente hidratado";
    } else {
      mensaje = "Valores fuera de rango, verifica los datos";
    }

    resultado.textContent = mensaje;
    resultado.className = "text-success";

  });

});
