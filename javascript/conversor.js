// A variavel que receb a moeda a ser trocada
const moedaDeTroca = "euro"
//variavel que receb a moeda para qual será feita a troca
const moedaParaTrocar = "KWZ"
// valor da troca
const valor = 100
// Ojectos com as taxas de cambio para cada moeda
const kwanza = { USD: 0.0012, EUR: 0.0011, GBP: 0.00099, Real: 0.0060, }
const dolar = { KWZ: 827.07, EUR: 0.94, GBP: 0.82, Real: 4.93, }
const euro = { KWZ: 887.55, USD: 1.07, GBP: 0.87, Real: 5.26, }
const libra = { KWZ: 1011.27, EUR: 1.15, USD: 1.22, Real: 6.02,}
const real = { KWZ: 167.81, EUR: 0.19, GBP: 0.17, USD: 0.20, }
// array com todos os objsctos ou moedas
const moedas = [kwanza, dolar, euro, libra, real]

//  função que decide qual objecto usar consoante o valor dijitado pelo usuario
function qualMoedaVamosTrocar(moedaDeTroca, moedas) {
    if (moedaDeTroca === 'dolar') {
        for (let index = 0; index < moedas.length; index++) {
            if (moedas[index] === dolar) {
                return dolar
            } 
        }
    } else if (moedaDeTroca === 'euro') {
        for (let index = 0; index < moedas.length; index++) {
            if (moedas[index] === euro) {
                return euro
            } 
        }
    } else if (moedaDeTroca === 'kwanza') {
        for (let index = 0; index < moedas.length; index++) {
            if (moedas[index] === kwanza) {
                return kwanza
            } 
        }
    } else if (moedaDeTroca === 'libra') {
        for (let index = 0; index < moedas.length; index++) {
            if (moedas[index] === libra) {
                return libra
            } 
        }
    } else if (moedaDeTroca === 'real') {
        for (let index = 0; index < moedas.length; index++) {
            if (moedas[index] === real) {
                return real
            } 
        }
    } else {
        console.log('Digite uma moeda valida palhaço');
    }
}

//console.log(qualMoedaVamosTrocar(moedaDeTroca, moedas)); // até aqui esta a funcionar

// função que escolhe dentro do objecto que valor usar e faz a converção
function converteMoeda(valor, moedaParaTrocar) {
    const taxaDeCambio = qualMoedaVamosTrocar(moedaDeTroca, moedas)

    if (taxaDeCambio[moedaParaTrocar]) {
        const taxaDestino = taxaDeCambio[moedaParaTrocar]
        //console.log(taxaDeCambio[moedaParaTrocar]); esta a pegar o valor certo
        const valorConvertido = valor * taxaDestino
        return valorConvertido
    } else {
        return "Valor Não suportado"
    }
}
console.log(converteMoeda(valor, moedaParaTrocar));
