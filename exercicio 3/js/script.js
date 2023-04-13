function exibir() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // variaveis
  let nome1 = prompt("Digite o nome da 1° pessoa");
  let idade1 = parseInt(prompt("Digite a idade da 1° pessoa:"));
  let nome2 = prompt("Digite o nome da 2° pessoa");
  let idade2 = parseInt(prompt("Digite a idade da 2° pessoa:"));
  let media = (idade1 + idade2) / 2;

  resultado.style.display = "block";
  resultado.innerHTML = `A idade média de ${nome1} e ${nome2} é ${media}`;
}
