"use strict";

const url = "http://localhost:3000/users";
const api = "https://jsonplaceholder.typicode.com/users";

// GET Request
export async function getUsers() {
    try {
        const response = fetch(url);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.log(error);
        throw error; // TODO: rewrite using then and catch
    }
}

export async function populateUsers(){
    fetch(api)
        .then((response) => response.json())
        .then(data => {
            for(let userData of data){
                fetch(url, {method:"POST", body: JSON.stringify(data)})
            }
        })
        .catch(err => console.error(err));
}

// TODO: FIX UNEXPECTED TOKEN EXPORT ERROR