// PASSO 02 - CONDIÇÕES BÁSICAS

// *17) Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.*

const veloc = 81

const verifPamento = (veloc > 80) ? veloc - 80 : 0;

const multa = 5 * verifPamento

if (veloc > 80) {
    console.log(`Mingous estas a se comportar mal, teras que pagar ${multa}`);
} else {
    console.log('paz e amor');
}

// 18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade dela e depois mostre se ela pode ou não votar.

const ano = 2005

const idade = 2024 - ano

if (idade < 18) {
    console.log('Não vota vc é mingous');
} else {
    console.log('O mingous é de maior e pode votar');
}

// 19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua média e mostre na tela. No final, analise a média e mostre se o aluno teve ou não um bom aproveitamento (se ficou acima da média 7.0)
const nomeM = 'Felipe'
let nota1 = 4
let nota2 = 6
let media = (nota1 + nota2) / 2

if (media > 7) {
    console.log(`O sr.${nomeM} teve um aproveitamento excelente acima dos 7.0, ${media}`);
} else {
    console.log(`O sr.${nomeM} teve um aproveitamento pessima acima dos 7.0, ${media}`);
}