function exibir() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // Variáveis
  let num = parseInt(prompt("Digite 1 Número de até 2 digitos: Ex: 5 ou 15"));
  let numStr = num.toString();
  let digito1 = numStr[0];
  let digito2 = numStr[1];

  let numeros = ["Zero","Um","Dois","Três","Quatro","Cinco","Seis","Sete","Oito","Nove","Dez","Onze","Doze","Treze","Quatorze","Quinze","Dezesseis","Dezessete","Dezoito","Dezenove"];

  let compostos = ["Dez","Vinte","Trinta","Quarenta","Cinqüenta","Sessenta","Setenta","Oitenta","Noventa"];

  for (let i = 0; i <= num; i++) {
    if (i == num) {
      if (num <= 9) {
        resultado.innerHTML = `${numeros[digito1]}`;
      } else if (num <= 19 && digito2 >= 0) {
        resultado.innerHTML = `${numeros[digito1 + digito2]}`;
      }

      if (digito1 > 1 && digito2 == 0) {
        resultado.innerHTML = `${compostos[digito1 - 1]}`;
      }

      if (num >= 20 && digito2 != 0) {
        resultado.innerHTML = `${
          compostos[digito1 - 1] + " e " + numeros[digito2]
        }`;
      }
    }
  }
  resultado.style.display = "block";
}
