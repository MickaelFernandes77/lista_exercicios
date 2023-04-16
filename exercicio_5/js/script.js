function calcular() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // variáveis
  let raio = parseFloat(prompt('Digite o raio do circulo:'))
  const pi = 3.14159
  let area = pi * (raio * 2)

  resultado.style.display = "block";
  resultado.innerHTML = `Área do círculo: ${area.toFixed(3)}`;
}
