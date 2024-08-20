// 15. Crear una función `duplicarArray` que tome un array de números como parámetro y
// retorne un nuevo array con cada elemento duplicado.
let array = [1,2,3,4];

function duplicarArray(array_original){
    return [...array_original];
}

console.log(array);
console.log(duplicarArray(array));

// 16. Crear una función `invertirCadena` que tome una cadena como parámetro y retorne la
// cadena invertida.
let string = "cadena";
let reversed_string = "";
for(let i=(string.length - 1); i>=0; i--){
    reversed_string += string[i];
}
console.log(reversed_string);

// 17. Crear una función `filtrarPorLongitud` que tome un array de palabras y un número como
// parámetro, y retorne un nuevo array con las palabras que tienen una longitud mayor al número.
function filtrarPorLongitud(array, numero){
    return array.filter(palabra =>
        palabra.length > numero
    );
}

let palabras = ["hola", "muy", "buenas"];
console.log(filtrarPorLongitud(palabras, 3));