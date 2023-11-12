let listaNumeros = [11,4,2,6,4,0,2,0,45,30];

function ordenarParaCrescente(conjuntoNumeros) {
    for (let index = 0; index < conjuntoNumeros.length; index++) {
        for (let loop = 0; loop < conjuntoNumeros.length; loop++) {
            if (conjuntoNumeros[index] < conjuntoNumeros[loop]) {
                // Troca os elementos se estiverem fora de ordem
                const temp = conjuntoNumeros[index] //variavel temporaria que armazena o valor do conjunto[index]
                conjuntoNumeros[index] = conjuntoNumeros[loop] 
                conjuntoNumeros[loop] = temp 

                // ordenando os elementos usando desestruturação
                [conjuntoNumeros[index], conjuntoNumeros[loop]] = [conjuntoNumeros[loop], conjuntoNumeros[index]] 
            }
        }
    }
    return conjuntoNumeros
}

function ordenarParaDecrescente(conjuntoNumeros) {
    for (let index = 0; index < conjuntoNumeros.length; index++) {
        for (let loop = 0; loop < conjuntoNumeros.length; loop++) {
            if (conjuntoNumeros[index] > conjuntoNumeros[loop]) {
                // ordenando os elementos usando desestruturação
                [conjuntoNumeros[loop], conjuntoNumeros[index]] = [conjuntoNumeros[index], conjuntoNumeros[loop]] 
            }
        }
    }
    return conjuntoNumeros
}

const numerosOrdenados = ordenarParaDecrescente(listaNumeros)

console.log(numerosOrdenados);

// outros testes..................
let numerosInteros =[10,9,8,7,6,5,4,3,2,1];

console.log(numerosInteros.reverse());
