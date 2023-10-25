// Terceiro desafio

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