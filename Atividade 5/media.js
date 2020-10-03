var Nota1;
var Nota2;
var Nota3;
var Nome;
var Media;

Nome = prompt("Insira seu nome");
Nota1 = prompt("Insira a nota 1?");
Nota2 = prompt("Insira a nota 2?");
Nota3 = prompt("Insira a nota 3?");

Media = parseFloat(Nota1) + parseFloat(Nota2) + parseFloat(Nota3);
Media = parseFloat(Media) / 3;

alert(Nome + '\n' + "Media: " + Media);