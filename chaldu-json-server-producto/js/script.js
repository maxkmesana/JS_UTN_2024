import { getProductos, postProducto2 } from "./api.js";
import { Producto } from "../producto/Producto.js";

const inputNombre = document.getElementById("nombre");
const inputPrecio = document.getElementById("precio");
const btn = document.getElementById("btnAdd");
const ul = document.getElementById("listaProductos");

let listaProductos = [];
//GET productos
document.addEventListener("DOMContentLoaded", async () => {
  /* listaProductos = await getProductos();
  console.log(listaProductos);
  mostrarProductos(); */
  cargarProductos();
});

async function cargarProductos() {
  try {
    const productos = await getProductos();
    listaProductos = productos.map((producto) => ({
      nombre: producto.nombre,
      precio: parseFloat(producto.precio).toFixed(2),
    }));
    mostrarProductos();
  } catch (error) {
    console.error("Error al cargar los productos:", error);
  }
}

function mostrarProductos() {
  listaProductos.forEach((producto) => {
    const li = document.createElement("li");
    li.textContent = `Producto: ${producto.nombre} Precio: ${producto.precio}`;

    ul.appendChild(li);
  });
}

function mostrarProductos2() {
  ul.innerHTML = "";

  const fragment = document.createDocumentFragment();

  listaProductos.forEach((producto) => {
    const li = document.createElement("li");
    li.textContent = `Producto: ${producto.nombre} - Precio: $ ${producto.precio}`;
    fragment.appendChild(li);
  });

  ul.appendChild(fragment);
}

btn.addEventListener("click", async () => {
  try {
    if (!validarFormulario()) {
      return;
    }

    const producto = new Producto(inputNombre.value, inputPrecio.value);

    const resultado = await postProducto2(producto);
    console.log("Producto creado:", resultado);
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
  }
});

function validarCamposTexto(texto) {
  return texto.trim().length > 0;
}

function validarNumero(number) {
  return !isNaN(Number.parseInt(number));
}

function validarFormulario() {
  if (
    !validarCamposTexto(inputNombre.value) ||
    !validarNumero(inputPrecio.value)
  ) {
    console.log("Faltan completar datos...");
    return false;
  }
  return true;
}
