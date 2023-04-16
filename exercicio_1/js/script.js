function calcular() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // Variaveis
  let altura = parseFloat(prompt("Digite a altura do terreno em numero:"));
  let largura = parseFloat(prompt("Digite a largura do terreno em numero:"));
  let valorMetro = parseFloat(prompt("Digite o valor do metro quadrado do terreno em numero:"));
  let area = altura * largura;
  let precoTerreno = area * valorMetro;

  resultado.style.display = "block";
  resultado.innerHTML = `Altura: ${altura.toFixed(1)} <br> Largura: ${largura.toFixed(1)} <br> Valor do Metro²: ${valorMetro.toFixed(2)} 
  <br><br> 
  Área do terreno: ${area.toFixed(2)} <br> Preço do terreno: ${precoTerreno.toFixed(2)} <br>`;
}
