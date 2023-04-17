function calcular() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");
  const btn = document.getElementById("btn");

  // Variáveis
  let minimo;
  let maximo;
  let soma = 0;
  let x = parseInt(prompt("Digite o 1° número"));
  let y = parseInt(prompt("Digite o 2° número"));

  if (x < y) {
    minimo = x;
    maximo = y;
  } else {
    minimo = y;
    maximo = x;
  }

  for (let i = minimo + 1; i < maximo; i++) {
    if (i % 2 != 0) {
      soma = soma + i;
    }
  }

  resultado.innerHTML = `Soma dos ímpares: ${soma}`;
  resultado.style.display = "block";
  btn.style.display = "none";
}
