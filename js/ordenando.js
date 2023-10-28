let number = [];

function gerarNumber(number) {
    for (let index = 1; index <= 10; index++) {
        number.push(index);
    }
    return number;
}

function ordena() {
    const numberNovo = gerarNumber(number);
    for (let index = 0; index < numberNovo.length; index++) {
        if (numberNovo[index] === 1) {
            numberNovo.length = 0;
            for (let i = 10; i >= 1; i--) {
                numberNovo.push(i);
            }
        }
    }
    return numberNovo;
}

console.log(ordena())
 

