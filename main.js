
function verificarEntrada(entrada){
    if(typeof entrada === 'number'){
        if(entrada%2==0){
            console.log("par");
        } else{
            console.log("impar");
        }
        } else if(typeof entrada === 'string'){
            console.log("texto");
    }else{
        console.log("a entrada nem é número nem é string");
    }
}
//Testando a função
verificarEntrada(4);       //A entrada é par
verificarEntrada(7);       //A entrada é ímpar
verificarEntrada('texto')  //A entrada é uma string