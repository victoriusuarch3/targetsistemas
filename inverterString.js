// Definindo a string a ser invertida
let originalString = "hello world";

// Criando uma variável vazia para a string invertida
let invertedString = "";

// Usando um loop para percorrer cada caractere da string original, do último ao primeiro
for (let i = originalString.length - 1; i >= 0; i--) {
  // Adicionando cada caractere encontrado na variável criada no passo 2
  invertedString += originalString[i];
}

// Imprimindo a string invertida
console.log(invertedString);
