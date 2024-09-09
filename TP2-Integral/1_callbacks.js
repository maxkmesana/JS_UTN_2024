/*
EJ 1:
Multiplicar números con un callback:
    o Crea una función multiplicar que acepte dos números y un callback.
    o Usa el callback para mostrar el resultado de multiplicar los dos números.
*/
function multiplicar(num1, num2, callback){
    callback(num1 * num2);
}

// multiplicar(2, 2, console.log);

/*
EJ 2:
Operación con números usando callbacks:
    o Define una función operarNumeros que acepte dos números y un callback.
    o Crea dos callbacks, uno para sumar y otro para restar los números.
*/
function operarNumeros(num1, num2, callback){
    console.log(callback(num1, num2));
}

function sumarNumeros(num1, num2){
    return num1 + num2;
}

function restarNumeros(num1, num2){
    return num1 - num2;
}

// operarNumeros(2, 2, sumarNumeros);
// operarNumeros(2, 2, restarNumeros);

/*
EJ 3:
Uso de setTimeout con callbacks:
    o Usa setTimeout para imprimir "Esto es un callback" después de 2 segundos.
*/
function timeOutPrint(callback){
    setTimeout(callback, 2000);
}

// timeOutPrint(function() {
//     console.log("Esto es un callback");
// });

/*
EJ 4:
Filtrar números pares con un callback:´'
    o Define una función filtrarPares que acepte un array de números y un callback.
    o Usa el callback para filtrar solo los números pares.
*/
let array = [1,2,3,4,5,6];
function filtrarPares(array, callback){
    return callback(array);
}

// console.log(filtrarPares(array, function(array) {
//     return array.filter((element) => element % 2 === 0);
// }))

