function calcular() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // variáveis
  let qntGlicose = parseFloat(
    prompt("Digite a quantidade de glicose no sangue:")
  );

  if (qntGlicose <= 100) {
    resultado.innerHTML = "Classificação: Normal";
  }

  if (qntGlicose > 100 && qntGlicose <= 140) {
    resultado.innerHTML = "Classificação: Elevada";
  }

  if (qntGlicose > 140) {
    resultado.innerHTML = "Classificação: Diabetes";
  }
  resultado.style.display = "block";
}
