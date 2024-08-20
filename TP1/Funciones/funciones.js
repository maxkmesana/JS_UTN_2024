// 4. Crear una función `saludar` que tome un parámetro `nombre` y retorne un saludo personalizado.
function saludar(nombre){
    console.log("Hola " + nombre);
}

// 5. Crear una función `esPar` que tome un número como parámetro y 
// retorne `true` si es par, y `false` si es impar
function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

// Crear una función `sumarArray` que tome un array de números como parámetro y retorne la
// suma de sus elementos
function sumarArray(array){
    let suma = 0;
    if(Array.isArray(array)){
        array.forEach(numero => {
            suma += numero;
        });
    }
    return suma;
}



// saludar("max")

// console.log(esPar(345));

// let array = [1,2,3,4];
// console.log(sumarArray(array));

// const arr = [1,2,3,4];
// console.log(arr);
// const copyArr = [...arr];
// console.log(copyArr);