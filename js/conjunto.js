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
