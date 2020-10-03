var Num1;
var Num2;
var soma;
var subtracao;
var resto;

Num1 = prompt("Digite numero 1");
Num2 = prompt("Digite numero 2");

soma = parseFloat(Num1) + parseFloat(Num2);
alert("Soma dos dois: " + soma);

subtracao = Num1 -  Num2;
alert("Subtração do primeiro pelo segundo: " + subtracao);

alert("Multiplicação: " + Num1 * Num2);

alert("Divisão: " + Num1 / Num2);

resto = parseInt(Num1) % parseInt(Num2);
alert("resto de divisão: " + Num1 % Num2);