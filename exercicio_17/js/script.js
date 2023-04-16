function calcular() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // Variáveis
  let num1 = parseInt(prompt("Digite o 1° número:"));
  let num2 = parseInt(prompt("Digite o 2° número:"));
  let comparacao1 = num1 % num2;
  let comparacao2 = num2 % num1;

  console.log(comparacao1);
  console.log(comparacao2);

  if (comparacao2 == 0 || comparacao1 == 0) {
    resultado.innerHTML = `São Múltiplos`;
  } else {
    resultado.innerHTML = `Não são Múltiplos`;
  }

  resultado.style.display = "block";
}
