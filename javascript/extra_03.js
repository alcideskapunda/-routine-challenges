/* Faça um programa que leia e valide as seguintes informações:
a)Nome: maior que 3 caracteres; b) Idade: entre 0 e 150; c)Salário: maior que zero; d) Sexo: "femenino" ou "masculino"
e) Estado Civil: "solteiro", "casado", "viúvo", "DIVORCIADO"
*/

const nome = 'Ântero'
const idade = 18
const salario = 5000000000
const sexo = 'masculino'
const estadoCivil = 'solteiro'

function validacao(nome, idade, salario, sexo, estadoCivil) {
    if (nome.length < 3) {
        return "Dijite um nome valido seu arronbado do caralho";
    } else if (idade === null || idade === undefined || idade > 150) {
        return "Dijite a sua idade seu arronbado do caralho";
    } else if (salario === 0) {
        return "Fala quanto vc ganha seu arronbado do caralho";
    } else if (sexo !== 'femenino' && sexo !== 'masculino') {
        return "fala ai vc é panina ou panino";
    } else if (estadoCivil !== 'casado' && estadoCivil !== 'solteiro' && estadoCivil !== 'viuvo' && estadoCivil !== 'divorciado') {
        return "Dijite o seu estado civil seu arronbado do caralho";
    } else {
        return `Pessoa séria,😎 Sr. ${nome}, tem uma furtuna avaliada em: ${salario.toLocaleString()} 🤑$ bilhões`;
    }
    
}

console.log(validacao(nome, idade, salario, sexo, estadoCivil));