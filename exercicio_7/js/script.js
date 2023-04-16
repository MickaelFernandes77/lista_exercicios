function calcular() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // variáveis
  let distancia = parseInt(prompt("Digite a distância percorrida:"));
  let combustivel = parseFloat(prompt("Combustível Gasto:"));

  let consumo = distancia / combustivel;
  console.log(consumo.toFixed(3));

  resultado.style.display = "block";
  resultado.innerHTML = `Distância Percorrida: ${distancia} <br> Combustível: ${combustivel} <br> Consumo médio: ${consumo.toFixed(3)}`;
}
