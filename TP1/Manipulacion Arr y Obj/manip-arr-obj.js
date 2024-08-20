// 24. Crear una función `ordenarNumeros` que tome un array de números como parámetro y
// retorne un nuevo array con los números ordenados de menor a mayor
function ordenarNumeros(array){
    return array.toSorted(function(a,b){return a - b});
}

let numeros = [34,12,68,143,1,0,10];
console.log(ordenarNumeros(numeros));

// 25. Crear una función `eliminarEstudiante` que tome un array de estudiantes y un nombre, y
// retorne un nuevo array sin el estudiante con ese nombre
class Estudiante{
    constructor(nombre, legajo){
        this.nombre = nombre;
        this.legajo = legajo;
    }

    print(){
        console.log(this.nombre, this.legajo);
    }
}

let estudiante_1 = new Estudiante("uno", 111);
let estudiante_2 = new Estudiante("dos", 222);
let estudiantes = [estudiante_1, estudiante_2];

function eliminarEstudiante(array, nombre){
        return array.filter(item => item.nombre != nombre);
}

console.log(eliminarEstudiante(estudiantes, "dos")[0]);

// 26. Crear una función `totalCarrito` que tome un array de productos y retorne el precio total de
// los productos.
class Producto{
    constructor(precio){
        this.precio = precio;
    }

    print(){
        console.log(this.precio);
    }
}

let producto_1 = new Producto(100);
let producto_2 = new Producto(200);
let producto_3 = new Producto(300);
let carrito = [producto_1, producto_2, producto_3];


function totalCarrito(carrito){
    let total = 0;
    carrito.forEach(element => {
         total += element.precio;
    });
    return total;
}

console.log(totalCarrito(carrito));