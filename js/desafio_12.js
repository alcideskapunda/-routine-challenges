// 3- Fazer um programa que permite somar 2 números sem usar o operar de soma(+)

let a = 5;
let b = 10;

const soma = (a, b) => {
    let maisCemMais = -a - b;

    return maisCemMais * -1;
}

console.log(soma(a, b));