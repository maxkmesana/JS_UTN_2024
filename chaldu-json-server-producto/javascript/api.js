const url = "http://localhost:3000/productos";

export async function getProductos() {
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
