let clubes = ["Barcelona", "RealMadrid", "Atletico", "City", "Bayer"];
let pontos = [20, 19, 16, 17, 18];

function calcularClassificacao(clubes, pontos) {
    const clubesPontos = [];
    for (let index = 0; index < clubes.length; index++) {
        if (pontos[index] % 2 == 0) {
            clubesPontos.push({clube: clubes[index], pontos: pontos[index] += 3});
        } else {
            clubesPontos.push({clube: clubes[index], pontos: pontos[index]});
        }
    }

    clubesPontos.sort((a, b) => b.pontos - a.pontos);
    
    const classificacao = clubesPontos;

    return classificacao;

};
//console.log(calcularClassificacao(clubes, pontos));

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
