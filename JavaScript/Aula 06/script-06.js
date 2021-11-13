/* //tipos de funções

//função declarativa
console.log('função declarativa');
function funcao(){
    console.log('testanto função');
}
funcao();

//expressões de funções
//com nomeação
console.log('expressões de funções c/ nomeação');
var teste = function funcaoTeste(){
    console.log('testanto expressões de funções com nomeação');
}
teste(); //OBS: chama pelo nome da variavel e não pelo nome da função!

//sem nomeação
console.log('expressões de funções s/ nomeação');
var teste2 = function(){
    console.log('testanto expressões de funções sem nomeação');
}
teste2();

//arrow function
console.log('arrow function');
var teste3 = () => {
    console.log('testando uma arrow function');
}
teste3() */