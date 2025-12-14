document.addEventListener("DOMContentLoaded", function () {

  const btnEvaluar = document.getElementById("btnEvaluar");
  const inputCodigo = document.getElementById("codigo");
  const resultado = document.getElementById("resultado");

  console.log("Enunciado 2 JS cargado");

  btnEvaluar.addEventListener("click", function () {

    const codigo = inputCodigo.value;

    if (!/^\d{3}$/.test(codigo)) {
      resultado.textContent = "Debe ingresar un código de exactamente 3 cifras";
      resultado.className = "text-danger";
      return;
    }

    let pares = 0;

    for (let i = 0; i < codigo.length; i++) {
      const digito = parseInt(codigo[i]);

      if (digito % 2 === 0) {
        pares++;
      }
    }

    let categoria = "";

    if (pares === 3) {
      categoria = "Director General";
    } else if (pares === 2) {
      categoria = "Directivo";
    } else if (pares === 1) {
      categoria = "Staff";
    } else {
      categoria = "Seguridad";
    }

    resultado.textContent = "Categoría: " + categoria;
    resultado.className = "text-success";

  });

});
