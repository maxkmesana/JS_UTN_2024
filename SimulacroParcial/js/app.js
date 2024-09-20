/* Imports, inicializacion de la aplicacion y demas
Se espera que la logica este separada en distintos modulos
*/
// import { User, ToDo, Post, Comment, Album } from "./js/docs/types.js";

import { getUsers, populateUsers } from "./requests/userRequests.js";



const userList = [];
const toDoList = [];
const postList = [];
const commentList = [];
const albumList = [];



document.addEventListener("DOMContentLoaded", () => {
    getUsers().then(data => {
        for(let user of data){
            userList.push(user);
        }
        console.log("Initial users database populated successfully!");
    })
    .catch(error => console.log(`Could not populate user database: ${error}`));
});



