function calcular() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");
  // Variaveis
  let altura = parseFloat(prompt("Digite a altura do retângulo em numero:"));
  let largura = parseFloat(prompt("Digite a largura do retângulo em numero:"));
  let area = altura * largura;
  let perimetro = (largura * 2) + (altura * 2);
  let diagonal = Math.sqrt((largura * largura) + (altura * altura));
  
  resultado.style.display = "block";
  resultado.innerHTML = `Altura: ${altura.toFixed(1)}<br> Largura: ${largura.toFixed(1)} <br><br> 
  Área: ${area.toFixed(4)}<br> Perímetro: ${perimetro.toFixed(4)} <br> Diagonal: ${diagonal.toFixed(4)}`
}
