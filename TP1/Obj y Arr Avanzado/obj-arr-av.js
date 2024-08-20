// 21. Crear un objeto `coche` con propiedades como `marca`, `modelo` y `anio`, y métodos como
// `arrancar` y `detener`.
class Auto{
    constructor(marca, modelo, anio){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    arrancar(){
        console.log("Arrancando...");
    }

    detener(){
        console.log("Deteniendo...");
    }
}

let auto = new Auto("marca", "modelo", 2004);
// auto.arrancar();
// auto.detener();

// 22. Crear un constructor `Persona` con propiedades `nombre` y `edad`, y un método `saludar`
// que imprima un saludo personalizado
class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log("Saludando...");
    }
}

// 23. Crear un método `agregarProducto` a la función constructora `Carrito` que agregue un
// producto al carrito.
function Carrito(){
    this.productos = [];
}

Carrito.agregarProducto = function agregarProducto(producto){
    this.productos.push(producto);
}