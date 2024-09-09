/*
EJ 6:
Crear y manipular un Set:
    o Crea un Set con los números 1, 2, 3, 4, y 5.
    o Añade el número 6 y elimina el número 3.
*/

const array = [1,2,3,4,5];
let set = new Set(array);
set.add(6);
set.delete(3);
// console.log(set);

// console.log(set);

/*
EJ 7:
Convertir un Set a un Array: 
    o Convierte el Set del ejercicio anterior en un array.
*/
// const newArray = Array.from(set);
// console.log(newArray);

/*
EJ 8:
Eliminar duplicados de un array usando Set: 
    o Dado un array [1, 2, 2, 3, 4, 4, 5], elimina los duplicados utilizando un Set
*/

// const array = [1, 2, 2, 3, 4, 4, 5];
// const set = new Set(array);
// console.log(set);

/*
EJ 9:
Comprobar existencia en un Set: 
    o Comprueba si el número 4 existe en el Set creado anteriormente y muestra el 
    resultado.
*/

// console.log(set.has(4));

/*
EJ 10:
Iterar sobre un Set: 
    o Itera sobre el Set creado en el ejercicio 6 e imprime cada número.
*/
// set.forEach((element) => {
//     console.log(element);
// });

// ALTERNATIVE:
for(let element of set){
    console.log(element);
}
