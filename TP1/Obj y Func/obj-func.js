// 13. Crear una función `crearPersona` que tome parámetros `nombre` y `edad`, y retorne un
// objeto persona con esas propiedades
function crearPersona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;

    return {nombre, edad};
}

let persona = crearPersona("jorge", 26);
console.log(persona.edad, persona.nombre);

// 14. Crear una función `obtenerInfo` que tome un objeto persona como parámetro y retorne
// una cadena con su información.
function obtenerInfo(persona){
    return persona.nombre + " " + persona.edad;
}

console.log(obtenerInfo(persona));