//# Funções Assíncronas e Promessas:
//Escreva uma função que simule uma chamada de API assíncrona usando uma promessa.
fetch('http://mingous.com').then((req, res) => res.end('mingous'))
//Use async/await para buscar dados de um servidor e exibi-los na página.

//# ES6+ (ECMAScript 2015+):
//Converta uma função tradicional em uma arrow function.
//Use desestruturação para extrair valores de um objeto.
function sumNormal(a, b) {
  return a + b;
}
const sumArrow = (a, b) => a + b;

const objeto = {
  nome: "mingous",
  idade: 18,
};
// console.log(objeto);
const { nome, idade } = objeto;
// console.log(nome, idade);

//# Trabalhando com Arrays e Objetos:
//Crie um array com nomes de frutas. Use métodos como map, filter ou reduce para manipular os dados.
//Crie um objeto representando um carro com propriedades como marca, modelo e ano.
const frutas = ["maçã", "mamao", "abacate", "pera", "ananas"];
console.log(frutas.map((fruta) => fruta.toLocaleUpperCase()));
console.log(frutas.filter((fruta) => fruta === "ananas"));

function Carro(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}
const carro = new Carro("lander crusi", "suzik", 1923);
console.log(carro);
//# Conceitos de Escopo e Closures:
//Escreva uma função que retorne outra função. A função interna deve acessar uma variável externa.
let n1 = 68;
let n2 = 22;
function retorno(a, b) {
  return sumArrow(a, b);
}
console.log(retorno(n1, n2));
//Explique o conceito de escopo léxico.

//# Testes Unitários:
//Escreva testes para a função de soma que você criou no primeiro exercício.
//Use uma biblioteca de testes como Jest ou Mocha.

//# Segurança e Boas Práticas:
//Pesquise sobre Cross-Site Scripting (XSS) e escreva um parágrafo explicando como evitá-lo.
// estudar mais sobre
// Validar a entrada do usuário, filtrando ou rejeitando caracteres especiais que possam ser usados para inserir scripts23.
// Escapar e sanitizar a saída, codificando ou removendo os caracteres especiais antes de exibi-los na página23.
// Usar Content Security Policy (CSP), uma medida de segurança que restringe quais scripts podem ser executados em um site4.
// Atualizar regularmente o software do site e do servidor, corrigindo as vulnerabilidades que possam ser exploradas por um ataque XSS3.

//Comente seu código explicando o que cada parte faz.
