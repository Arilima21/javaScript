function executar(fn, num1 = 0, num2 = 0) {
    if (typeof fn == 'function') {
        console.log(fn(num1,num2));
    }
}

function som(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function mult(a,b){
    return a * b;
}

function div(a,b){
    return a / b;
}

executar(som, 20, 2);
executar(sub, 300, 40);
executar(mult, 30, 2);
executar(div, 50,2);