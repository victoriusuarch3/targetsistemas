// Solicita ao usuário um número a ser verificado na sequência de Fibonacci
var numero = prompt("Digite um número: ");

// Converte o número para inteiro
numero = parseInt(numero);

// Inicializa as variáveis para calcular a sequência de Fibonacci
var a = 0;
var b = 1;
var resultado = 0;

// Calcula a sequência de fibonacci até que o resultado seja maior ou igual ao número informado pelo usuário
while (resultado < numero) {
  resultado = a + b;
  a = b;
  b = resultado;
}

// irá Verificar se o número informado pertence ou não a sequência de fibonacci
if (resultado === numero) {
  console.log(numero + " pertence à sequência de Fibonacci.");
} else {
  console.log(numero + " não pertence à sequência de Fibonacci.");
}