// chalenge 10 - o ultimo do ano 2023
// 1- ler uma matriz 4x4 e calcular a soma do maior com o menor elemento da matriz./
// 2- não transformar a matriz em array
// 3- não usar nenhum array, apneas a matriz

const matriz = [[8, 9, 5, 2], [12, 10, 13, 18], [2, 5, 7, 11], [14, 12, 13, 15]];

/* 1- const soma = (matriz) => {
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
console.log(soma(matriz)); */

/* 2- const soma2 = (matriz) => {
    let maiorN = matriz[0][0];
    let menorN = matriz[0][0];
    for (let index = 0; index < matriz.length; index++) {
        let matrizPercorrida = matriz[index];
        for (let join = 0; join < matrizPercorrida.length; join++) {
            if (matrizPercorrida[join] > maiorN) {
                maiorN = matrizPercorrida[join]
            }
            if (matrizPercorrida[join] < menorN) {
                menorN = matrizPercorrida[join]
            }
        }
    }
    let somatorio = maiorN + menorN;
    return somatorio;
}
console.log(soma2(matriz));*/

const soma3 = (matriz) => {
    let maiorN = matriz.length;
    let menorN = matriz.length;

    for (let index = 0; index < matriz.length; index++) {
        for (let jindex = 0; jindex < matriz[index].length; jindex++) {
            if (matriz[index][jindex] > maiorN) {
                maiorN = matriz[index][jindex];
            }
            if (matriz[index][jindex] < menorN) {
                menorN = matriz[index][jindex];
            }
        }
    }
    let somatorio = maiorN + menorN;
    
    return somatorio;
}

console.log(soma3(matriz));