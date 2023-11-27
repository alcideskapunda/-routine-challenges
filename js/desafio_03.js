// Terceiro desafio // challenge 03
// Criar uma função que receb um array de numeros inteiros e ordene de forma decrescente os números multiplos por 2

let nInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verifica(nInteiros) {
    const multiplos = [];
    for (let index = 0; index < nInteiros.length; index++) {
        if (nInteiros[index] % 2 == 0) {
            multiplos.push(nInteiros[index]);
        }
    }

    multiplos.sort((a, b) => b - a);

    return multiplos
}

console.log(verifica(nInteiros));