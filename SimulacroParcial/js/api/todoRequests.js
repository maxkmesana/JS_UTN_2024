const url = "http://localhost:3000/todos"
const api = "https://jsonplaceholder.typicode.com/todos"

// GET
export async function getTodos(id="") {
    if(id !== "") url + `?id=${id}`
    try {
        const response = fetch(url);
        if(!(await response).ok){
            
        }
    } catch (error) {
        
    }
}

// populate database