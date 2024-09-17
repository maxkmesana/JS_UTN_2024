const url = "http://localhost:3000/productos";

//GET
export async function getProductos() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching productos:", error);
    throw error;
  }
}

export async function getProductos2() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Error de red:", error);
    } else {
      console.error("Error al obtener productos:", error.message);
    }
    throw error;
  }
}

export function getProductosPromise() {
  return fetch(url, { method: "GET" })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
}

//POST

export function postProductoPromise(producto) {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  })
    .then((response) => response)
    .catch((error) => console.log(error));
}

export async function postProducto(producto) {
  try {
    return await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function postProducto2(producto) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error al postear el producto:", error);
    throw error;
  }
}
