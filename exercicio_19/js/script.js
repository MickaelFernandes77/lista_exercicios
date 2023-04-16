function calcular() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // Variáveis
  let salario = parseFloat(prompt("Digite o salário da pessoa"));
  let aumento;
  let salarioAumentado;
  let porcentagem;

  if (salario <= 999) {
    porcentagem = 20.0;
  }

  if (salario > 999 && salario <= 2999) {
    porcentagem = 15.0;
  }

  if (salario > 2999 && salario <= 7999) {
    porcentagem = 10.0;
  }

  if (salario >= 8000) {
    porcentagem = 5.0;
  }

  console.log(porcentagem)
  aumento = (salario * porcentagem) / 100;
  salarioAumentado = salario + aumento;
  resultado.innerHTML = `Novo salário: R$ ${salarioAumentado.toFixed(2)} <br> Aumento: R$ ${aumento.toFixed(2)}  <br> Porcentagem: ${porcentagem}%`;
  resultado.style.display = "block";
}
