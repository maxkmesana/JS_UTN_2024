/* Imports, inicializacion de la aplicacion y demas
Se espera que la logica este separada en distintos modulos
*/
// import { User, ToDo, Post, Comment, Album } from "./js/docs/types.js";

<<<<<<< HEAD
import { getUsers, populateUsers } from "./js/api/userRequests.js";
=======
import { getUsers, populateUser } from "./js/api/userEndpoint.js";
>>>>>>> 7c91b0b8d15147e3af2b93ea863b8499a7055429

const userList = [];
const toDoList = [];
const postList = [];
const commentList = [];
const albumList = [];

populateUser();

// document.addEventListener("DOMContentLoaded", () => {
//     getUsers().then(data => {
//         for(let field of data){
//             userList.push(field);
//         }
//         console.log("Initial users database populated successfully!");
//     })
//     .catch(error => console.log(error));
// });


