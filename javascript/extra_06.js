/* Dado um ano, retorne o século em que ele se encontra */
function solution(year) {
    return Math.floor(year/100) + ((year%100 ? 1 : year) % 10 ? 1 : 0);
}
//console.log(solution(1905));

// Você recebe um número inteiro de dois dígitos n. Retorne a soma de seus dígitos.

const nInteiro = (numero) => {
    let primeiroN = Math.floor(numero / 10);
    let segundoN = numero % 10;
    let soma = primeiroN + segundoN;
    return soma;
}
console.log(nInteiro(56));

//Dado um número inteiro n, retorne o maior número que contém exatamente n dígitos.
const maiorN = (numero) => {
    //let maiorN = parseInt('9'.repeat(numero)); // essa tbm funciona muito bem
    let maiorN = Math.pow(10, numero) - 1;
    return maiorN
}
console.log(maiorN(2));

