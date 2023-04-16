function calcular() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // variáveis
  let precoProduto = parseFloat(prompt("Digite o preço do produto:"));
  let quantidadeComprada = parseInt(
    prompt("Digite a quantidade comprada pelo cliente:")
  );
  let valorRecebido = parseFloat(prompt("Digite o valor recebido do cliente:"));
  let valorAPagar = precoProduto * quantidadeComprada;
  let troco = valorRecebido - valorAPagar;

  if (valorAPagar > valorRecebido) {
    let falta = valorRecebido - valorAPagar;
    resultado.innerHTML =
      "Valor insuficiente. Faltam: R$ " + Math.abs(falta).toFixed(2);
  } else {
    resultado.innerHTML = `Troco do cliente: R$ ${troco.toFixed(2)}`;
  }

  resultado.style.display = "block";
}
