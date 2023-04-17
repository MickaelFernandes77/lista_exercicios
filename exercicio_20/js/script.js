function calcular() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // Variáveis
  let num1 = parseFloat(prompt("Digite o número inicial"));
  let num2 = parseFloat(prompt("Digite o número final"));
  let soma = 0;

  if (num1 > num2 || num1 == num2) {
    alert("Digite o inicial número menor que o número final");
    window.location.reload();
  }

  for (let i = num1; i <= num2; i++) {
    soma += i;
  }

  resultado.innerHTML = `Resultado: ${soma}`;
  resultado.style.display = "block";
}
