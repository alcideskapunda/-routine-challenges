// chalenge 10 - o ultimo do ano 2023
// ler uma matriz 4x4 e calcular a soma do maior com o menor elemento da matriz

const matriz = [[8, 9, 5, 2], [12, 10, 13, 18], [2, 5, 7, 11], [14, 12, 13, 15]];

const soma = (matriz) => {
    let valoresDaMatrizPercorrida = [];
    let maiorN;
    let menorN;

    for (let index = 0; index < matriz.length; index++) {
        let matrizPercorrida = matriz[index];

        for (let join = 0; join < matrizPercorrida.length; join++) {
            valoresDaMatrizPercorrida.push(matrizPercorrida[join])
        }
    }

    maiorN = Math.max(...valoresDaMatrizPercorrida);
    menorN = Math.min(...valoresDaMatrizPercorrida);

    return maiorN + menorN;
}

console.log(soma(matriz));


