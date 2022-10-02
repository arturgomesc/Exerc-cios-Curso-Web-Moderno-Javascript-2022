// funcao sem retorno
function imprimirSoma(a, b) { 
    console.log(a + b);
}

imprimirSoma(2, 3)
imprimirSoma(2) //NaN
imprimirSoma(2, 3, 4, 5) // JS ignora os outros parametros
imprimirSoma() //NaN

//funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3));
console.log((2));
console.log(soma()); // NaN, nao eh atribuido nada ao primeiro parametro

 