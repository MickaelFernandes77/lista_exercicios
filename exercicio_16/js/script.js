function calcular() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // Variáveis
  let distancia1 = parseFloat(prompt("Digite a distância que o 1° dardo percorreu:"));
  let distancia2 = parseFloat(prompt("Digite a distância que o 2° dardo percorreu:"));
  let distancia3 = parseFloat(prompt("Digite a distância que o 3° dardo percorreu:"));
  let distanciaArray = [distancia1, distancia2, distancia3].sort();

  resultado.innerHTML = `Maior distância: ${distanciaArray[2].toFixed(2)}`;
  resultado.style.display = "block";
}
