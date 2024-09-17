export class Producto {
  id;
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  get getNombre() {
    return this.nombre;
  }

  get getId() {
    return this.id;
  }

  get getPrecio() {
    return this.precio;
  }
}
