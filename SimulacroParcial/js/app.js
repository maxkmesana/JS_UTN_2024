/* Imports, inicializacion de la aplicacion y demas
Se espera que la logica este separada en distintos modulos
*/
// import { User, ToDo, Post, Comment, Album } from "./js/docs/types.js";

import { getTodos, getTodosByUserId } from "./requests/todoRequests.js";
import { getUsers, populateUsers } from "./requests/userRequests.js";



let userList = [];
let toDoList = [];
let postList = [];
let commentList = [];
let albumList = [];

// document.addEventListener("DOMContentLoaded", () => {
//     getUsers().then(data => {
//         for(let user of data){
//             userList.push(user);
//         }
//         console.log("Initial users database populated successfully!");
//     })
//     .catch(error => console.log(`Could not populate user database: ${error}`));
// });

let selectedUserId = undefined;
const userHeader = document.getElementById("user-header");
const userListElement = document.getElementById("user-list");
const toDoListElement = document.getElementById("todo-list");

document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname;
    
    if(currentPage.endsWith("/toDo.html")){
        getUsers().then((data) => {
            for(const user of data){
                userList.push(user);
            }
        })
        .then(() => {renderUserList()})
        .catch((error => console.log(error))); // CALLBACK
    }
});

function renderUserList(){
    for(let user of userList){
        const li = document.createElement("li");
        li.id = user.id;
        li.textContent = `Username: ${user.username} - Name: ${user.name}`;
        li.onclick = function(){
            selectedUserId = li.id;
            getUsers(selectedUserId).then(data => {
                userHeader.textContent = data.username;
            });
            populateSelectedTodoList(selectedUserId);
        }
        userListElement.appendChild(li);
    }
}

function populateSelectedTodoList(selectedUserId){
    toDoListElement.innerHTML = "";
    toDoList = [];
    getTodosByUserId(selectedUserId).then((data) => {
        for(const toDo of data){
            toDoList.push(toDo);
        }
    })
    .then(() => {renderToDoList()})
    .catch((error) => console.log(error));
}

function renderToDoList(){
    for(let toDoItem of toDoList){
        const li = document.createElement("li");
        li.id = toDoItem.id;

        let liTextContent = `Title: ${toDoItem.title}`;
        liTextContent += toDoItem.completed === true ? `, Completed: yes` : `, Completed: no`;
        li.textContent =  liTextContent;

        toDoListElement.appendChild(li);
    }
}