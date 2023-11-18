/* Challenge 09
Escreva uma funçao que receba um array de inteiros, e retorne um mesmo array substituindo os valores negativos por somatório de todos elementos do array multiplicado pelo maior número primo*/

const numbers = [6, 8, -1, -9, 10, -7]

function alteraValroesNegativos(numbers) {
    //Maior numero do Array
    let maiorNumero = Math.max(...numbers)
    // Somatorio do array
    let somaDoArr = numbers.reduce((soma, indece) => {
        return soma + indece
    })
    // Verifica se os numeros são negativos e subistitui
    let outroN = numbers.map((number) => {
        if (number < 0) {
            return somaDoArr * maiorNumero
        }
        return number
    })
    return outroN
}

console.log(alteraValroesNegativos(numbers));

// testando com o forEach
// deu panico / mexer aqui depois.........

