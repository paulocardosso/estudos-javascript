/* //criaçaõ de array ou vetor
let array = ["teste", 1.5, true, ["teste2"],null]
console.log(array);

//manipulando arrays
//forEach()
array.forEach(function(item, index){
    console.log(index, item); //vai mostrar todos os indices e itens no vetor array
})

//push()
array.push('novo item no final');
console.log(array);

//pop()
array.pop(); //remove o ultimo item do array
console.log(array);


//unshift()
array.unshift('novo item no inicio');
console.log(array);

//shift()
array.shift(); //remove o primeiro item do array
console.log(array);

//splice()
array.splice(0,2); //remove os itens de indice 0 até 1 (2-1)
console.log(array);

//slice()
let novoArray = array.slice(0,2); //só deixa os itens de indice 0 até 1 (2-1)
console.log(novoArray); */

//objetos
let pessoa = {
    nome: 'Paulo Cardoso',
    idade: 29,
    altura: 1.8,
    portadoDef: false,
    enderecoCompleto: {
        endereco: 'Rua Pastor Valdomiro', 
        numero: 85
    },
    telefones: [77999935752,77999365912]
}
console.log(pessoa); //mostra todas as propriedades do objeto 
console.log(pessoa.nome); //retorna o nome (Paulo Cardoso)
console.log(pessoa.telefones[0]) //retorna o primeiro item do array (telefones) que está no objeto (pessoa) (7799935752)
console.log(pessoa.enderecoCompleto.numero) //retorna o numero do objeto enderecoCompleto que por sua vez esta no objeto (pessoa) (85)

//desustruturando o objeto pessoa
var {nome, portadoDef, enderecoCompleto} = pessoa;
console.log(nome, portadoDef, enderecoCompleto.endereco); 