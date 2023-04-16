function calcular() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // variáveis
  let n1 = parseFloat(prompt("Digite o 1° número:"));
  let n2 = parseFloat(prompt("Digite o 2° número:"));
  let nota = (n1 + n2).toFixed(1);

  if(nota < 60.00){
    resultado.innerHTML = `Nota Final: ${nota} <br> REPROVADO.`;    
  }  
  resultado.style.display = "block";
}
