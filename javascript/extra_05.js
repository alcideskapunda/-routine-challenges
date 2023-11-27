/*                          CAÇA LETRAS
Criar uma função que receb uma letra e uma frase. Ela deve dizer quantas vezes essa letra aparece na frase.
*/

// Numero de vezes que a letra aparece
const stringCounter = (letter, string) => {
    let cont = 0;
    for (const index in string) {
        if (letter === string[index]) {
            cont++;
        }
    }
    console.log(`Essa Letra aparece ${cont} vezes`);
    //console.log('Essa Letra aparece ' + cont + (cont === 1 ? ' vez' : ' vezes'));
}
stringCounter('o', 'gostoso');

// resolução passando as letras repetidas num array 
const contaLetra = (letra, frase) => {
    let repeticao = [];
    for (let index = 0; index < frase.length; index++) {
        if (frase[index] === letra) {
            repeticao.push(frase[index]);
        }
    }
    return repeticao;
}

//console.log(contaLetra('o', 'gostoso'));



/*                                                 Percentagem 
Crie uma funcao que recebe dois valores (a, b). Deve retornar quantos % b é de a
 */

const percentage = (a, b) => {
    let result = (b / a) * 100;
    console.log(`B é ${result}% de A`);
}

percentage(50, 40);

/*                                                 Faxina
    Crie uma função que recebe um objecto (com os atributos nome, sobrenome e idade), e delete algum caso esteja vazio(null).
 */

const cleaning = (object) => {
    if (object.name === null) {
        delete object.name;
    } else if (object.surname === null) {
        delete object.surname;
    } else if (object.age === null) {
        delete object.age;
    } else {
        console.log('Nada a ser deletado!');
    }
    console.log(object);
}

const object = {
    name: "Ântero",
    //surname: "Kapunda",
    surname: null,
    age: 18,
}

cleaning(object);

/*                              Organizador whatssap
    Uma função que recebe um array com atributos (itsMe, admin e name) e verifica se o istMe e o ADMIN SAO === true se for organiza
*/
const persons = [
    { itsMe: false, admin: false, name: "Ângelo" },
    { itsMe: true, admin: true, name: "Ântero" },
    { itsMe: false, admin: false, name: "Giovanni" },
    { itsMe: false, admin: true, name: "Leonardo" },
    { itsMe: false, admin: true, name: "Felipe" },
];
  
const organizer = (personsList) => {
//se return <0 a vem primeiro que o b
//se return >0 b vem primeiro que o a
personsList.sort((a, b) => {
    if (a.itsMe === true && b.itsMe === false) {
    return -1;
    }
});
//console.log(personsList);

personsList.sort((a, b) => {
    if (a.admin === true && b.admin === false) {
    return -1;
    }
});
console.log(personsList);
console.table(personsList);
};

organizer(persons);

/*                                          MOLDURA
    crie uma funcao que recebe dois numeros (a,b) e cria uma moldura com essas dimensoes. a e b tem que ser maiores que 1
*/
const frame = (row, column) => {
let line = "+";
let middleLine = "-"
if (row > 0 && column > 0) {
    for (let i = 0; i < row -2 ; i++) {
    line = line + "-";
    middleLine = middleLine + " ";
    }
    line = line + "+";
    middleLine = middleLine + "-";

    console.log(line)
    for (let i = 0; i < column -2; i++) {
    console.log(middleLine);
    }
    console.log(line);

}
};

frame(3, 5);