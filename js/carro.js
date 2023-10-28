
let custoDeFabrica = 5000;

let distribuidor = (28 / 100) * custoDeFabrica;
let imposto =  (45 / 100) * custoDeFabrica;

function custoDeCarro(custoDeFabrica, distribuidor, imposto) {
    let carroNovo = custoDeFabrica + distribuidor + imposto;
    return carroNovo;
}

console.log(custoDeCarro(custoDeFabrica, distribuidor, imposto));