function exibir() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // Variáveis
  let signo;
  let data = prompt("Digite o dia e o mês do nascimento: Exemplo: 10/05");
  let dataFiltrada = data.replace("/", "");
  let dia = dataFiltrada.substring(0, 2);
  let mes = dataFiltrada.substring(2, 4);
  parseInt(dia);
  parseInt(mes);

  if ((mes == 1 && dia <= 20) || (mes == 12 && dia <= 22)) {
    signo = "Capricornio";
  } else if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 18)) {
    signo = "Aquário";
  } else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
    signo = "Peixes";
  } else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)) {
    signo = "Áries";
  } else if ((mes == 4 && dia >= 21) || (mes == 5 && dia <= 20)) {
    signo = "Touro";
  } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
    signo = "Gêmeos";
  } else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
    signo = "Câncer";
  } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
    signo = "Leão";
  } else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
    signo = "Virgem";
  } else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
    signo = "Libra";
  } else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
    signo = "Escorpião";
  } else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
    signo = "Escorpião";
  }

  resultado.innerHTML = `Signo: ${signo}`;
  resultado.style.display = "block";
}
