/*
    Escreva um algoritmo que recebe uma lista de números inteiros e retorna a soma apenas dos números pares
*/

const lista = [1,2,3,4,5,6];
let soma = 0;
for (let index = 0; index < lista.length; index++) {
    if (lista[index] % 2 === 0) {
        soma += lista[index];
    }
}

console.log(soma);

/* Escreva um programa que calcule a soma dos numeros pares de 1 a 100 */
let soma2 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        soma2 += i;
    }
}

console.log(soma2);

let numEmMilivolts = 99;

let ppm = numEmMilivolts * 11.000000e-03;

console.log(ppm);
