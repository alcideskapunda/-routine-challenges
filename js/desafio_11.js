// Desafio 2024
// 01 Usando sua linguagem de programação de preferência, faça uma programa que mostre desde 1900 até 2024, todos os anos cujo dia 07 de Janeiro calhou num domingo.


let anoAtual = data.getFullYear();
let dia = 7;
// O primeiro mês e o primeiro dia da semana comação na poxição 0
let mes = 0;
let diaSemana = 0; 

for (let anoInicio = 1900; anoInicio <= anoAtual; anoInicio++) {
    let verificaData = new Date(anoInicio, mes, dia);
    
    if (verificaData.getDay() === diaSemana) {
        console.log(`Em ${anoInicio}, o dia 07 de janeiro foi num domingo`);
    }
}
