/* 02
Fazer um programa que recebe um valor número qualquer em milivolts e converte para ppm. */
let nMilivolts = 99;

const conversaoPpm = (num) => {
    let fatorConversao = "11000000e-03";

    return fatorConversao * num;
}

console.log(conversaoPpm(nMilivolts));

// 3- Fazer um programa que permite somar 2 números sem usar o operar de soma(+)

let a = 5;
let b = 10;

const soma = (a, b) => {
    let maisCemMais = -a - b;

    return maisCemMais * -1;
}

console.log(soma(a, b));