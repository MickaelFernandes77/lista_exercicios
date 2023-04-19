function validaCnpj() {
  let cnpj = prompt("Digite o CNPJ que deseja conferir:");
  let resultadoUser = document.getElementById("resultado");

  //REGEX QUE REMOVE OS PONTOS E AS BARRAS
  let numeros = cnpj.split("-")[0].replace(/[.|\/]/g, "");
  let digitos = cnpj.split("-")[1];

  if (getPrimeiroDigito(numeros) != digitos[0]) {
    resultadoUser.innerHTML = "CNPJ " + cnpj + " - Inválido";
  } else {
    resultadoUser.innerHTML = "CNPJ " + cnpj + " - Válido";
  }
  
  if (getSegundoDigito(numeros + "" + digitos[0]) != digitos[1]) {
    resultadoUser.innerHTML = "CNPJ " + cnpj + " - Inválido";
  } else {
    resultadoUser.innerHTML = "CNPJ " + cnpj + " - Válido";
  }
  resultadoUser.style.display = "block";
}

function getPrimeiroDigito(numeros) {
  let peso = 2;
  let resultado = 0;
  for (let i = numeros.length - 1; i >= 0; i--) {
    resultado += numeros[i] * peso;
    peso = peso == 9 ? 2 : peso + 1;
  }

  let modulo = resultado % 11;
  resultado = modulo < 2 ? 0 : 11 - modulo;
  return resultado;
}

function getSegundoDigito(numeros) {
  let peso = 2;
  let resultado = 0;
  for (let i = numeros.length - 1; i >= 0; i--) {
    resultado += numeros[i] * peso;
    peso = peso == 9 ? 2 : peso + 1;
  }

  let modulo = resultado % 11;
  resultado = modulo < 2 ? 0 : 11 - modulo;
  return resultado;
}
