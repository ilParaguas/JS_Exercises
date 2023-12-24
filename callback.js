/*
function suma (num1, num2, callback) {
    const  res = num1 + num2;
    callback(res);
}

function impresion(num) {
    console.log("La suma es "+ num);
}

suma(4, 5, impresion);



function cuadradoAsync(num, callback) {
    setTimeout(()=>{
        const res = num*num;
        callback(res);
    }, 1000);
}

cuadradoAsync(5, function(resultado){
    console.log("El cuadrado es ", resultado);
})

*/

function buscarElemento(array, callback) {
    for (const elemento of array) {
        if(callback(elemento)){
            return elemento;
        }
    }
}

const numeros = [1, 2, 1, 6, 4];

const resultado = buscarElemento(numeros, function(elemento){
    return elemento > 3;
})

console.log(resultado);