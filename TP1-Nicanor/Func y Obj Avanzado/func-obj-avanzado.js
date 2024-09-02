// 27. Crear una función `crearCalculadora` que retorne un objeto con métodos `sumar`, `restar`,
// `multiplicar` y `dividir`.
function crearCalculadora(){
    return {
        sumar: (a , b) => a + b,
        restar: (a , b) => a - b,
        multiplicar: (a , b) => a * b,
        dividir: (a , b) => a / b
    };
}

let calculadora = crearCalculadora();

console.log(calculadora.sumar(10, 20));

// 28. Crear una función `crearCuentaBancaria` que retorne un objeto con métodos `depositar`,
// `retirar` y `saldo`.
function crearCuentaBancaria(){
    this.balance = 0;
    return {
        depositar: (x) => this.balance += x,
        retirar: (x) => this.balance -= x,
        saldo: () => console.log("Saldo: " + this.balance)
    };
}

let cuentaBancaria = crearCuentaBancaria();
cuentaBancaria.depositar(1000);
cuentaBancaria.retirar(100);
cuentaBancaria.saldo();

// 29. Crear un constructor `Libro` con propiedades `titulo`, `autor` y `paginas`, y un método
// `detalles` que imprima la información del libro.
function Libro(titulo, autor, paginas){
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;

    this.detalles = function(){
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Paginas: ${this.paginas}`);
    }
}

let libro = new Libro("titulito", "autorsito", 142);
libro.detalles();