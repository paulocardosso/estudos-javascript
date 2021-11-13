/* //Calculadora
function calculadora(){
    const op = Number(prompt('Escolha uma operação:\n 1-Soma\n 2-Subtração\n 3-Multiplicação\n 4-Divisão\n'+
    ' 5-RestoDaDivisão\n 6-Potenciação'));

    if (op < 7 && op > 0){
        var n1 = Number(prompt('Informe o primeiro valor:'));
        var n2 = Number(prompt('Informe o segundo valor'));
        var resultado;
    }else{
        alert('Essa operação não é permitida nesta calculadora');
        calculadora();
    }   

    function soma(){
        resultado = n1+n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOp();
    }

    function sub(){
        resultado = n1-n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOp();
    }

    function mul(){
        resultado = n1*n2;
        alert(`${n1} x ${n2} = ${resultado}`);
        novaOp();
    }

    function div(){
        resultado = n1/n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOp();
    }

    function res(){
        resultado = n1%n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`);
        novaOp();
    }

    function pot(){
        resultado = n1**n2;
        alert(`${n1} elevado a ${n2} é ${resultado}`);
        novaOp();
    }

    function novaOp(){
        let opc = Number(prompt('Deseja fazer uma nova operação:\n 1-SIM\n 2-NÃO'));

        if (opc == 1){
            calculadora()
        }else if(opc == 2){
            alert('Calculadora finalizada');
        }else{
            alert('Essa opção é invalida! Tente Novamente');
            novaOp();
        }
    }

    switch (op){
        case 1:
            soma();
            break;
        case 2:
            sub();
            break;
        case 3:
            mul();
            break;
        case 4:
            div();
            break;
        case 5:
            res();
            break;
        case 6:
            pot();
            break;
    }

    
}

calculadora(); */

/* function escopoLocal() {
	let escopoLocalInterno = 'local';
}
console.log(escopoLocalInterno); */