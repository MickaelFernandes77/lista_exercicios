function calcular() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");
  const btn = document.getElementById("btn");

  // Variáveis
  let num = parseInt(prompt("Digite um numero"));
  let arrayNums = [];

  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      arrayNums.push(i);
    }
  }

  for (let x = 0; x < arrayNums.length; x++) {
    resultado.innerHTML += `${arrayNums[x]} <br>`;
  }

  resultado.style.display = "block";
  btn.style.display = "none";
}
