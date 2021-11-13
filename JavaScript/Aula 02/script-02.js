//tipos primitivos

//typeof(variavel) => retorna o tipo da variavel

//boolean
/* var valor1 = true;
alert("Tipo da variavel valor1: "+typeof(valor1)+" Valor da variavel valor1: "+valor1);

//number
var valor2 = 1.5;
alert("Tipo da variavel valor2: "+typeof(valor2)+" Valor da variavel valor2: "+valor2);

//string
var valor3 = "Paulo Cardoso";
alert("Tipo da variavel valor3: "+typeof(valor3)+" Valor da variavel valor3: "+valor3);

//função
var valor4 = function() {}
alert("Tipo da variavel valor4: "+typeof(valor4)+" Valor da variavel valor4: "+valor4); */

//variavel (podem ser alteradas e usada globalmente)
/* valor5 = 10;
alert("Tipo da variavel valor5: "+typeof(valor5)+" Valor da variavel valor5: "+valor5);
valor5 = "Paulo";
alert("Tipo da variavel valor5: "+typeof(valor5)+" Valor da variavel valor5: "+valor5); */

//let (podem ser alteradas e usada em blocos)
/* valor6 = "Cardoso";
alert("Tipo da variavel valor6: "+typeof(valor6)+" Valor da variavel valor6: "+valor6);
valor6 = 10.10;
alert("Tipo da variavel valor6: "+typeof(valor6)+" Valor da variavel valor6: "+valor6); */

//const (não podem ser alteradas)
/* const valor7 = "Oliveira";
valor7 = 10; //(ERROR const não pode ser alterado)
alert("Tipo da variavel valor7: "+typeof(valor7)+" Valor da variavel valor7: "+valor7);
 */

//Diferença entre var e let
/* var a = 5;
var b = 10;

if (a === 5) {
  let a1 = 4; //let só é usada dentro do bloco if
  var b1 = 20; //var criada so para diferenciar do let
  b = 1; //a variavel b tem o seu valor alterado

  alert(a1);  // 4
  alert(a); // 5
  alert(b);  // 1
}
alert(a); // 5
alert(b); // 1
alert(b1); // 20 (o var mesmo criado no bloco acima, pode ser utilizado aqui)
alert(a1); // Error (o let só é usada dentro do bloco acima) */