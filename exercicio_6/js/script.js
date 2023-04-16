function calcular() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // variáveis
  let nomeFuncionario = prompt("Digite o nome do funcionário");
  let salarioPorHora = parseFloat(prompt("Digite o salário por hora do funcionário:"));
  let horasTrabalhadas = parseInt(
    prompt("Digite a quantidade de horas que o funcionário trabalhou:")
  );
  let salarioTotal = salarioPorHora * horasTrabalhadas;

  resultado.style.display = "block";
  resultado.innerHTML = `Nome: ${nomeFuncionario} <br> Salário por hora: ${salarioPorHora} <br> Horas trabalhadas: ${horasTrabalhadas} <br><br> O pagamento para ${nomeFuncionario} deve ser de R$ ${salarioTotal.toFixed(2)}`;
}
