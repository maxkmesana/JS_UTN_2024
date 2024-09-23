/* Imports, inicializacion de la aplicacion y demas
Se espera que la logica este separada en distintos modulos
*/

import { getUsers } from "./requests/userRequests.js";


let selectedUser = undefined;
const userTable = document.getElementById("user-table");
const userHeader = document.getElementById("user-header");

const todoBtn = document.getElementById("todos-btn");
const todoAnchor = document.getElementById("todo-anchor");

const postAnchor = document.getElementById("post-anchor");
const postBtn = document.getElementById("posts-btn");

const albumAnchor = document.getElementById("album-anchor");
const albumBtn = document.getElementById("albums-btn");


// LOAD
document.addEventListener("DOMContentLoaded", async () => {
    const data = await getUsers();
    createTable(data);
});

function createTable(users){
    for(const user of users){
        createRow(user);
    }
}

function createRow(user){
    const newRow = document.createElement("tr");
    newRow.id = user.id;
    
    const tdId = document.createElement("td");
    tdId.textContent = user.id;

    const tdUsername = document.createElement("td");
    tdUsername.textContent = user.username;

    const tdName = document.createElement("td");
    tdName.textContent = user.name;

    newRow.append(tdId, tdUsername, tdName);
    userTable.appendChild(newRow);
}

// event on click of tr (set selected user id)
userTable.addEventListener("click", async (event) => {
    const clickedRow = event.target.closest("tr");
    if(clickedRow){
        selectedUser = await getUsers(clickedRow.id);

        userHeader.textContent = selectedUser.username;

        todoAnchor.href = `todos.html?userId=${selectedUser.id}`;
        todoBtn.disabled = false;

        postAnchor.href = `posts.html?userId=${selectedUser.id}`;
        postBtn.disabled = false;

        albumAnchor.href = `albums.html?userId=${selectedUser.id}`;
        albumBtn.disabled = false;
    }
});

