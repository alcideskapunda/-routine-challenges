/* Challenge 4
Criar um programa que lê um conjunto de 4 valores L, A, B, C, onde L é um valor inteiro e positivo e A, B, C, são quaisquer valores reais ou inteiros e os escreva. A seguir: 

a) Se L=1 escrever os três valores A, B, C em ordem crescente.
b) Se L=2 escrever os três valores A, B, C em ordem decrescente.
c) Se L=3 escrever os três valores A, B, C de forma que o maior entre A, B, C fique dentre os dois.*/
let valor = [3, 3, 1, 5];
let result = [];

if (valor[0] == 1) {
    for (let i = 1; i < valor.length; i++) {
        result.push(valor[i]);
        result.sort((a, b) => a - b);
    }
    console.log(result);
} else if (valor[0] == 2) {
    for (let i = 1; i < valor.length; i++) {
        result.push(valor[i]);
        result.sort((a, b) => b - a);
    }
    console.log(result);
} else if (valor[0] == 3) { // terceiro aqui
    for (let i = 1; i < valor.length; i++) {
        result.push(valor[i]);
        result.sort((a, b) => b - a);    
    }
    let maiorValor = `${result[1]} ${result[0]} ${result[2]}`;

    console.log(maiorValor);  
}



/* else if (valor[0] == 3) { // terceiro aqui
    for (let i = 1; i < valor.length; i++) {
        result.push(valor[i]);
        result.sort((a, b) => a - b);    
        if (valor[i] === result.length) {
            result.pop(result.length);
            let maiorValor = push(Math.floor(result / 2));
            result.splice(maiorValor, 0, result)
        }
    }
    console.log(result);
    
} */
