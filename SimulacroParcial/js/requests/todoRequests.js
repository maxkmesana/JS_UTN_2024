const url = "http://localhost:3000/todos"
const api = "https://jsonplaceholder.typicode.com/todos"

// GET
export async function getTodos(id="") {
    try {
        const response = await fetch(`${url}/${id}`);
        if(!response.ok){
            throw new Error(`HTTP ERROR: ${response.status}, ${response.text}`);
        }
        console.log(`HTTP STATUS: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

// GET BY USER
export async function getTodosByUserId(userId="") {
    try {
        const response = await fetch(`${url}?userId=${userId}`);
        if(!response.ok){
            throw new Error(`HTTP ERROR: ${response.status}, ${response.text}`);
        }
        console.log(`HTTP STATUS: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

// POST (crear)
export async function postToDo(toDo){
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(toDo)
        });
        if(!response.ok){
            throw new Error(`HTTP ERROR: ${response.status}`);
        }
        console.log(`HTTP STATUS: ${response.status}, ${response.statusText}`);
        return await response.json();
    } catch (error) {
        console.log(error)
    }
}

// PUT
export async function putTodo(id, toDo){
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(toDo)
        });
        if(!response.ok){
            throw new Error(`HTTP ERROR: ${response.status}, ${response.text}`);
        }
        console.log(`HTTP RESPONSE: ${response.status}, ${response.text}`);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

// DELETE
export async function deleteTodo(id) {
    try {
        if(id == null) return;
        const response = await fetch(`${url}/${id}`,{
            method: 'DELETE'
        });
        if(!response.ok){
            throw new Error(`HTTP ERROR: ${response.status}, ${response.text}`)
        }
        return await response.json();
    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
}