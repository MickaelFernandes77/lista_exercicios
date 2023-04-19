function exibir() {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // Variáveis
  let palavra = prompt("Digite uma palavra").toLocaleLowerCase();
  let vogais = 0;
  let consoantes = 0;

  for (let i = 1; i <= palavra.length; i++) {
    let letras = palavra[i - 1];
    if (letras != "a" && letras != "e" && letras != "i" && letras != "o" && letras != "u") {
      consoantes += 1;
    }else{
      vogais += 1;
    }
  }

  resultado.innerHTML = `Vogais ${vogais} <br> Consoantes: ${consoantes}`;
  resultado.style.display = "block";
}
