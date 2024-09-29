const baseURL = "https://my-api.com/users";

const getUsers = () => {
    return fetch(baseURL);
}

const postUser = async (user) => {
    try {
        const response = await fetch(baseURL, {
            method: "POST",
            body: JSON.stringify(user)
        });
        if(!response.ok){
            throw new Error(`${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}


const putUser = async (id, newUser) => {
    try {
        const response = await fetch(`${baseURL}/${id}`, {
            method: "PUT",
            body: JSON.stringify(newUser)
        });
        if(!response.ok){
            throw new Error(`${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

const deleteUsers = async (id) => {
    try {
        const response = await fetch(`${baseURL}/${id}`, {
            method: "DELETE"
        });
        if(!response.ok){
            throw new Error(`${response.status}, ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}