function calcular() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // Variáveis
  let option = prompt(
    "Digite o tipo de grau que deseja converter: C(Celcius) ou F(Fahrenheit)"
  );
  let temperatura = parseFloat(prompt("Digite a temperatura:"));

  if (option == "C" || option == "c") {
    let f = temperatura * 1.8 + 32.0;
    resultado.innerHTML = `Temperatura equivalente em Fahrenheit: ${f.toFixed(2)}`;
  }

  if ((option == "F" || option == "f")) {
    let c = (temperatura - 32) / 1.8;
    resultado.innerHTML = `Temperatura equivalente em Celsius: ${c.toFixed(2)}`;
  }
  resultado.style.display = "block";
}
