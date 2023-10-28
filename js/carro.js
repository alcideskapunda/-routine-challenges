let custoDeFabrica = 2000;

function calcularImposto(custoDeFabrica) {
    let distribuidor = (28 / 100) * custoDeFabrica;
    let imposto =  (45 / 100) * custoDeFabrica;
    return distribuidor + imposto;
}

function custoDeCarro(custoDeFabrica) {
    let impostosTotais = calcularImposto(custoDeFabrica);
    let carroNovo = custoDeFabrica + impostosTotais;
    return carroNovo;
}

console.log(custoDeCarro(custoDeFabrica));