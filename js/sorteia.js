let numberAleatorio = [];
let maior = [];
let divisivel = [];
for (let index = 0; index < 20; index++) {
    const intervalo = Math.floor(Math.random() * 10);
    numberAleatorio.push(intervalo);
    if (numberAleatorio[index] > 5) {
        maior.push(numberAleatorio[index]);
    }
    if (numberAleatorio[index] % 3) {
        divisivel.push(numberAleatorio[index]);
    }
}
console.log(`Numeros sorteados ${numberAleatorio}`);
console.log(`Numeros maiores de 5 => ${maior}`);
console.log(`Numeros divisiveis por 3 => ${divisivel}`);