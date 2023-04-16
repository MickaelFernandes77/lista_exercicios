function calcular() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // variáveis
  let n1 = parseInt(prompt("Digite o 1° número:"));
  let n2 = parseInt(prompt("Digite o 2° número:"));
  let n3 = parseInt(prompt("Digite o 3° número:"));
  let numArray = [n1, n2, n3].sort();
  
  resultado.style.display = "block";
  resultado.innerHTML = `Menor: ${numArray[0]}`;
}
