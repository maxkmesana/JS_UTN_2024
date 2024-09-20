"use strict";

const url = "http://localhost:3000/users";
const api = "https://jsonplaceholder.typicode.com/users";

// GET Request
export async function getUsers(id="") {
    try {
        const response = await fetch(`${url}/${id}`);
        if(!response.ok){
            throw new Error(`HTTP ERROR: ${response.status}`);
        }
        console.log(`HTTP RESPONSE STATUS: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
}

// fetch from typicode and post to own users database.
export async function populateUsers(){
    try {
        const response = await fetch(api);
        if(!response.ok){
            throw new Error(`HTTP ERROR: ${response.status}`);
        }
        const data = await response.json();
        for(let user of data){
            await fetch(url,{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: user.stringify()
            });
        }
    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
}