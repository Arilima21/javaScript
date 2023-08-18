function executar(fn) {
    if(typeof fn === 'function') {
        console .log(fn());
    }
}
function BOMDIA() {
    return 'BOMDIA';
}

executar(BOMDIA);