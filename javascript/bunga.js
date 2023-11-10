let nCigarros = 5;
let anosFumando = 20;
let vidaPerdida = 10;

function anosFumandoEmDias(anosFumando) {
    const diasEmUmAno = 365.25; // considerando o anos bissextos
    const dias = anosFumando * diasEmUmAno;
    return dias;
}

function vidaGasta(nCigarros, vidaPerdida) {
    const descontoDeVida = anosFumandoEmDias(anosFumando) / (nCigarros * vidaPerdida);
    return descontoDeVida;
}

function dataActual() {
    const dataActual = new Date();
    const anoActual = dataActual.getFullYear();
    const diasNoAno = new Date(anoActual, 1, 29).getDate() === 29 ? 366 : 365;
    return diasNoAno;
}
function tempoRestandeDeVida() {
    const tempoRestante = dataActual() - vidaGasta(nCigarros, vidaPerdida);
    const dias = Math.round(tempoRestante);
    return dias;
}
console.log(dataActual());
console.log(tempoRestandeDeVida());