const nome = 'Eduardo';
const sobrenome = 'Pasini';
const idade = 30;
const peso = 140;
const alturaEmM = 1.76;
const anoAtual = 2022;
let imc;  //peso / (altura * altura)
let anoNascimento;

anoNascimento = anoAtual - idade;
imc = peso / (alturaEmM * alturaEmM);
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg.`);
console.log(`Tem ${alturaEmM} m de altura e seu IMC é de ${imc}.`);
console.log(`nome nasceu em ${anoNascimento}.`);


