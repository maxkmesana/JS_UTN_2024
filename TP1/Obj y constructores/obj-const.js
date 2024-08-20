// 7. Crear un objeto literal `persona` con las propiedades `nombre`, `edad` y `profesion
const Persona = function(nombre, edad, profesion){
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;

    this.print = function(){
        console.log(this.nombre, this.edad, this.profesion);
    }
}

let persona = new Persona("nombre", 20, "asd??");
persona.print();

// 8. Crear un constructor `Producto` que tome parámetros `nombre`, `precio` y `stock`, y cree un
// objeto con esas propiedades. 
class Producto{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
        
    print(){
        console.log(this.nombre, this.precio, this.stock);
    }
}

let producto = new Producto("nombre", 20, "stock");
producto.print();

// 9. Crear un objeto `pelicula` utilizando el constructor `Pelicula` con propiedades como `titulo`,
// `director` y `anio`.
class Pelicula{
    constructor(titulo, director, anio){
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
    }
        
    print(){
        console.log(this.titulo, this.director, this.anio);
    }
}

let pelicula = new Pelicula("titulo", "Director", 1997);
pelicula.print();