function calcular() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // Variáveis
  let n1 = parseInt(prompt("Digite o 1° número"));
  let n2 = parseInt(prompt("Digite o 2° número"));
  let n3 = parseInt(prompt("Digite o 3° número"));
  let n4 = parseInt(prompt("Digite o 4° número"));
  let n5 = parseInt(prompt("Digite o 5° número"));
  let arrayNums = [n1, n2, n3, n4, n5];

  arrayNums.sort(function (a, b) {return b < a;});

  resultado.innerHTML = `${arrayNums}`;
  resultado.style.display = "block";
  btn.style.display = "none";
}
