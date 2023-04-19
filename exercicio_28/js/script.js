function exibir() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // Variáveis
  let n1 = parseInt(prompt("Digite o 1° Número"));
  let n2 = parseInt(prompt("Digite o 2° Número"));
  let n3 = parseInt(prompt("Digite o 3° Número"));
  let n4 = parseInt(prompt("Digite o 4° Número"));
  let n5 = parseInt(prompt("Digite o 5° Número"));
  let array = [n1, n2, n3, n4, n5];
  array.sort(function (a, b) {return b < a;});


  resultado.innerHTML = `Menor: ${array[0]} <br> Maior: ${array[4]}`;
  resultado.style.display = "block";
}
