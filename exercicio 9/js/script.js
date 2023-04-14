function calcular() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // variáveis
  let sec = parseInt(prompt("Digite o tempo em segundos:"));
  let horas = sec / 3600;
  let min = (sec % 3600) / 60;
  let secTratado = sec % 60;
  
  resultado.style.display = "block";
  resultado.innerHTML = `${horas.toFixed(0)}:${min.toFixed(0)}:${secTratado.toFixed(0)}`;
}
