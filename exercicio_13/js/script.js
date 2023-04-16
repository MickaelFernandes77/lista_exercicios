function calcular() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // variáveis
  let minutos = parseInt(prompt("Digite a quantidade de minutos usados"));
  let precoBase = 2;
  let valorAPagar = 0;

  if (minutos < 100) {
    valorAPagar = 50.0;
    resultado.innerHTML = `Valor a pagar: ${valorAPagar.toFixed(2)}`;
  }

  if (minutos > 100) {
    let minStr = minutos.toString();
    let minutosAMais = minStr.substring(1);
    valorAPagar = 50 + parseInt(minutosAMais) * precoBase;
    resultado.innerHTML = `Valor a pagar: ${valorAPagar.toFixed(2)}`;
  }

  resultado.style.display = "block";
}
