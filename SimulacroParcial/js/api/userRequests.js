"use strict";

const url = "http://localhost:3000/users";
const api = "https://jsonplaceholder.typicode.com/users";

// "?id={x}"

// GET Request
export async function getUsers(id="") {
    if(id !== "") url + `?id=${id}`;
    return fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error(`HTTP ERROR: ${response.status}`);
        }
        console.log(`HTTP SUCCESS: ${response.status}`);
        return response.json();
    })
    .catch(error => console.log(error));
}

// fetch from typicode and post to own users database.
export async function populateUsers(){
    fetch(api)
        .then(response => response.json())
        .then(data => {
            for(let user of data){
                fetch(url, {method:'POST', body: JSON.stringify(user)})
            }
        })
        .catch(err => console.error(err));
}