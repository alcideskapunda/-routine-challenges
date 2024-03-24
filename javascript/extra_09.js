// PASSO 02 - CONDIÇÕES BÁSICAS

// *17) Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.*

const veloc = 81

const verifPamento = (veloc > 80) ? veloc - 80 : 0;

const multa = 5 * verifPamento

// if (veloc > 80) {
//     console.log(`Mingous estas a se comportar mal, teras que pagar ${multa}`);
// } else {
//     console.log('paz e amor');
// }

// 18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade dela e depois mostre se ela pode ou não votar.

const ano = 2005

const idade = 2024 - ano

// if (idade < 18) {
//     console.log('Não vota vc é mingous');
// } else {
//     console.log('O mingous é de maior e pode votar');
// }

// 19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua média e mostre na tela. No final, analise a média e mostre se o aluno teve ou não um bom aproveitamento (se ficou acima da média 7.0)
const nomeM = 'Felipe'
let nota1 = 8
let nota2 = 6
let media = (nota1 + nota2) / 2

// if (media > 7) {
//     console.log(`O sr.${nomeM} teve um aproveitamento excelente acima dos 7v, ${media}V`);
// } else {
//     console.log(`O sr.${nomeM} teve um aproveitamento pessima abaixo dos 7v, ${media}V`);
// }

// PASSO 10 – FUNÇÕES
// 95) Refaça o exercício 90, só que agora em forma de função Somador(), que vai receber dois parâmetros e vai retornar o resultado da soma entre eles para o programa principal.

const sum = (a, b) => a + b;
// console.log(sum(2, 3));

// 98) Crie um programa que tenha uma função SuperSomador(), que vai receber dois números como parâmetro e depois vai retornar a soma de todos os valores no intervalo entre os valores recebidos.
// Ex: 
// SuperSomador(1, 6) vai somar 1 + 2 + 3 + 4 + 5 + 6 e vai retornar 21
// SuperSomador(15, 19) vai somar 15 + 16 + 17 + 18 + 19 e vai retornar 85

const SuperSomador = (a, b) => {
    // let arr = []
    let i = 0
    for(a; a <= b; a++) {
        console.log(a);
        i += a
        // arr.push(a)
    }
    console.log(i);
    // console.log(arr.reduce((acumulador, valorCorrente) => acumulador + valorCorrente, 0))
}

// SuperSomador(1, 6)

// 99) Faça um programa que possua uma função chamada Potencia(), que vai receber 
// dois parâmetros numéricos (base e expoente) e vai calcular o resultado da 
// exponenciação.
// Ex: Potencia(5,2) vai calcular 52 = 25 

// console.log(5 ** 2)

// ------------------------------------------------

// Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obtemos 3, 5, 6 e 9. A soma destes múltiplos é 23.
// Termine a solução para que ela retorne a soma de todos os múltiplos de 3 ou 5 abaixo do número passado.
// Além disso, se o número for negativo, retorne 0.
// Nota: Se o número for um múltiplo de 3 e 5, conte-o apenas uma vez.

function codeWars() {
    let sum = 0
    for (let index = 1; index < 10; index++) {
        if ((index % 3 == 0) || (index % 5 == 0)) {
            console.log(index);
            sum += index
        }
    }
    console.log(sum);
}

codeWars()