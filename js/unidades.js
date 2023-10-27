// IMPRIMIR SÓ OS NUMEROS
let number = 123;
let converterNumber = number.toString();

for (let index = 0; index < converterNumber.length; index++) {
    console.log(converterNumber.charAt(index));
}
//IMPRIMIR COM OS NOMES
const numero = 555;
let centena = Math.floor(numero / 100);
let dezena = Math.floor((numero % 100) / 10);
let unidade = numero % 10;

console.log(`Centena = ${centena}`);
console.log(`Desena = ${dezena}`);
console.log(`Unidade = ${unidade}`);