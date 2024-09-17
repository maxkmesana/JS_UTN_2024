import { getProductos } from "./api.js";

const inputNombre = document.getElementById("nombre");
const inputPrecio = document.getElementById("precio");
const btn = document.getElementById("btnAdd");
const ul = document.getElementById("listaProductos");

let listaProductos = [];

document.addEventListener("DOMContentLoaded", async () => {
  cargarProductos();
});

async function cargarProductos() {
  try {
    const productos = await getProductos();
    listaProductos = productos.map((producto) => ({
      nombre: producto.nombre,
      precio: parseFloat(producto.precio).toFixed(2), // Asegura que el precio tenga 2 decimales
    }));
    mostrarProductos();
  } catch (error) {
    console.error("Error al cargar los productos:", error);
  }
}

function mostrarProductos() {
  listaProductos.forEach((producto) => {
    const li = document.createElement("li");
    li.textContent = `Producto: ${producto.nombre} Precio: $ ${producto.precio}`;

    ul.appendChild(li);
  });
}
