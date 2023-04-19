let inverterPalavra = () => {
  // Campo de inserção da saída
  const resultado = document.getElementById("resultado");

  // Variáveis
  let palavra = prompt("Digite uma palavra").toLocaleLowerCase();
  let palavraInvertida = "";

  // invertendo a palavra
  for (var i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
  }

  if (palavraInvertida == palavra) {
    resultado.innerHTML = `É palíndroma`;
  }else{
    resultado.innerHTML = `Não é palíndroma`;
  }

  resultado.style.display = "block";
};
