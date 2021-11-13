//condicionais
/* var j1 = 0;
var j2 = 0;
var placar;

//ternario
j1 != -1 && j2 != -1 ? console.log('jogadores validos'):console.log('jogadores invalidos'); 

//if
if (j1 > 0 && j2 == 0){
    console.log('Jogador1 marcou ponto!');
    placar = j1 > j2;
    console.log(placar); 
//else if
}else if(j2 > 0 && j1 == 0){
    console.log('Jogador2 marcou ponto!');
    placar = j2 > j1;
    console.log(placar);
//else
}else{
    console.log('Ninguem marcou ponto!');
}

//switch...case break default
switch(placar){
    case j1 > j2:
        console.log('Jogador1 ganhou!');
        break;
    case j2 > j1:
        console.log('Jogador2 ganhou!');
        break;
    default:
        console.log('Ninguem ganhou!');
        break;
} */

//repetição
let array = [1,2,'string',true];

let pessoa = {
    nome: 'Paulo',
    idade: 29
}

//usando for
console.log('Usando for');
for (let i=0;i<array.length;i++){
    console.log('Indice: '+i+' Valor: '+array[i]);
}

//usando for...in array
console.log('Usando for...in array');
for (let i in array){
    console.log('Indice: '+i+' Valor: '+array[i]);
}

//usando for...in array
console.log('Usando for...in objeto pessoa');
for (i in pessoa){
    console.log('Propriedade: '+i+' Valor: '+pessoa[i]);
}
//OBS: pessoa.i gera um undefined, pois o tipo de i é uma string, sendo assim pessoa['nome']...pessoa['idade']

//usando for...of
console.log('Usando for...of array');
for (let v of array){
    console.log('Valor: '+v+' Indice: '+array.indexOf(v));
}

//usando o while
console.log('Usando while');
var a = 0
while(a<5){
    a++;
    console.log(a);
}

//usando do...while
console.log('Usando do...while');
a = 0
do{
    a++;
    console.log(a);
}while(a<5)
