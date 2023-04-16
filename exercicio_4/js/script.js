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

  resultado.style.display = "block";
  resultado.innerHTML = `Troco do cliente: R$ ${troco.toFixed(2)}`;
}
