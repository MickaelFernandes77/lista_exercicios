function calcular() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");
  const btn = document.getElementById("btn");

  // Variáveis
  let num = parseInt(prompt("Digite um numero para ver a tabuada do numero escolhido"));

  for (let i = 1; i <= 10; i++) {
    resultado.innerHTML += num + ' X ' + i + " = " + num * i + '<br>';
  }

  resultado.style.display = "block";
  btn.style.display = "none";
}
