let clubes = ["Barcelona", "RealMadrid", "Atletico", "City", "Bayer"];
let pontos = [20, 119, 14, 17, 18];

function calcularClassificacao(clubes, pontos) {
    const clubesPontos = [];
    for (let index = 0; index < clubes.length; index++) {
        clubesPontos.push({clube: clubes[index], pontos: pontos[index]});
    }
//

//Calcula os pontos que os clubes terão após vencer os outros jogos e retorna a lista de clubes ordenada pelos pontos.
/*for (let index = 3; index < clubesPontos.length; index++) {
    clubesPontos[index].pontos += 3;
    
    return clubesPontos;
};*/
clubesPontos.forEach(clube => {
    clube.pontos += 3;
});

clubesPontos.sort((a, b) => b.pontos - a.pontos);

const classificacao = clubesPontos;
//const classificacao = clubesPontos.map(clube => `${clubes} : ${clube.pontos} pontos`);
//const classificacao = clubesPontos.map({ clube: clubesPontos[clubes], pontos: clubesPontos[pontos]});
return classificacao;
};

console.log(calcularClassificacao(clubes, pontos));

for (let i = 0; i < pontos.length; i++) {
    if (pontos[i] % 2 == 0) {
        console.log(`Estes clubes: ${pontos[i]} são: vencedores`);
    } else {
        console.log(`Estes clubes: ${pontos[i]} são: perdedores`);
    }
}

/* const vencedor = calcularClassificacao(clubes, pontos);
  for (let index = 0; index < vencedor.length; index++) {
      if (vencedor[index] % 2 == 0) {
          console.log(`Estes clubes são vencedores ${vencedor[index]}`);
      }else {
         console.log(`Estes clubes: ${vencedor[index]} são pededores`);
      }
  }*/