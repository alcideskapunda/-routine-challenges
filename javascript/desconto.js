//Escreva 1 programa que receba do usuário o preço de 1 produto,e se o preço for superior a 100 reais, faz 1 desconto de 30% se o cliente for VIP, e se não for, desconta 10%. Se o preço for ≤100reais não desconta nada... O programa deve perguntar ao usuário se é ou não VIP. Exiba o preço do produto, o desconto e o preço final!
const preco = 100
const estadoCliente = "NAOVIP"

function valorFinal(preco, estadoCliente) {
    if (preco > 100 && estadoCliente === "VIP") {
        const valorApagar = preco - (preco * 0.3)
        console.log(valorApagar);
    } else if (preco > 100 && estadoCliente !== "VIP"){
        const valorApagar = preco - (preco * 0.1)
        console.log(valorApagar);
    } else {
        const valorApagar = preco
        console.log(valorApagar);
    }
    //return valorApagar
}

valorFinal(preco, estadoCliente)