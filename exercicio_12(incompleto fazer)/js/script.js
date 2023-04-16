function calcular() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // variáveis
  let coeficienteA = parseInt(prompt("Digite o 1° coeficiente:"));
  let coeficienteB = parseInt(prompt("Digite o 2° coeficiente:"));
  let coeficienteC = parseInt(prompt("Digite o 3° coeficiente:"));

  let formula = (coeficienteA * coeficienteA) + coeficienteB + 1 + coeficienteC;
  console.log(formula)

  resultado.style.display = "block";
}
