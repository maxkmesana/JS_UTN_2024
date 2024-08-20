// 10. Crear un array `frutas` con varios nombres de frutas. Imprimir el tercer elemento del array.
let frutas = ["banana", "manzana", "pera"];

console.log(frutas[2]);

// 11. Agregar una fruta más al final del array `frutas`. Imprimir el array actualizado 
frutas.push("nueva-fruta");
console.log(frutas);

// 12. Crear una función `filtrarPares` que tome un array de números como parámetro y retorne
// un nuevo array solo con los números pares
let pares_e_impares = [1,4,6,7,3,0];

function filtrarPares(array){
    return array.filter(numero => numero % 2 === 0);
}

console.log(filtrarPares(pares_e_impares));