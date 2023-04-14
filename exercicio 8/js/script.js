function calcular() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // Variáveis
  let a = parseFloat(prompt("Digite o valor de A:"));
  let b = parseFloat(prompt("Digite o valor de B:"));
  let c = parseFloat(prompt("Digite o valor de C:"));
  // Calculos
  let quadrado = a * a;
  let triangulo = (b * a) / 2;
  let trapezio = ((b + a) * c) / 2;
  
  resultado.style.display = "block";
  resultado.innerHTML = `Quadrado: ${quadrado.toFixed(4)} <br> Triângulo: ${triangulo.toFixed(4)} <br> Trapézio: ${trapezio.toFixed(4)}`;
}
