// 18. Crear un array de objetos `estudiantes`, donde cada objeto tenga propiedades como
// `nombre`, `edad` y `promedio`.

class Estudiante{
    constructor(nombre, edad, promedio){
        this.nombre = nombre;
        this.edad = edad;
        this.promedio = promedio;
    }
}

let estudiante = new Estudiante("nombre", 21, 9.99);
let estudiante2 = new Estudiante("nombre2", 22, 8.99);
let estudiante3 = new Estudiante("nombre3", 23, 7.99);

let estudiantes = [estudiante, estudiante2, estudiante3];
for(let element of estudiantes){
    console.log(element);
}

// 19. Crear una función `buscarEstudiante` que tome un array de estudiantes y un nombre, y
// retorne el objeto del estudiante con ese nombre.
function buscarEstudiante(array, nombre){
    return array.find(item => 
        item.nombre === nombre
    );
}

console.log(buscarEstudiante(estudiantes, "nombre2"));

// 20. Crear una función `promedioClase` que tome el array de estudiantes y retorne el promedio
// de sus promedios
function promedioClase(array){
    let suma = 0;
    let i = 0;
    array.forEach(element => {
        suma += element.promedio;
        i++;
    });
    return promedio = suma / i;
}

console.log(promedioClase(estudiantes));