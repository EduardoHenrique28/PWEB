var Aluno1 = {
  ra: '0039411751090',
  nome: 'Reginaldo'
}
alert("RA:" + Aluno1.ra + "\nNome: " + Aluno1.nome);

Aluno1.ra = '0060412012710';
Aluno1.nome = 'João';
alert("RA:" + Aluno1.ra + "\nNome: " + Aluno1.nome);

Aluno1['ra'] = '0030981812049';
Aluno1['nome'] = 'Larissa';
alert("RA:" + Aluno1.ra + "\nNome: " + Aluno1.nome);