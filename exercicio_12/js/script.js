function calcular() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // variáveis
  let a, b, c, delta, x1, x2;

  a = prompt("Digite o coeficiente A: ");
  b = prompt("Digite o coeficiente B:");
  c = prompt("Digite o coeficiente C:");

  if (a != 0) {
    delta = b * b - 4 * a * c;

    if (delta < 0) {
      resultado.innerHTML = "Essa equação não possui raízes reais!";
    } else {
      x1 = (-b + Math.sqrt(delta)) / (2 * a);
      x2 = (-b - Math.sqrt(delta)) / (2 * a);
      resultado.innerHTML = `X1 = ${x1.toFixed(4)} <br> X2 = ${x2.toFixed(4)}`;
    }
  }

  resultado.style.display = "block";
}
