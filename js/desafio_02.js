/*                      Chalange 02
Alterar o chalange 01, e considera a seguinte regra: clubes com pontos pares (irão vencer o proximo e serão-lhes acrescentado + 3 pontos), e os clubes com pontos impares(irão perder o proximo jogo). Após aplicar a regra ordenar os clubes novamente e imprimir
*/

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
console.log(calcularClassificacao(clubes, pontos));

