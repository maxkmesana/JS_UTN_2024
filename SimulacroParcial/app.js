/* Imports, inicializacion de la aplicacion y demas
Se espera que la logica este separada en distintos modulos
*/
// import { User, ToDo, Post, Comment, Album } from "./js/docs/types.js";

import { populateUsers } from "./js/api/userEndpoint.js";

const userList = [];
const toDoList = [];
const postList = [];
const commentList = [];
const albumList = [];

populateUsers();



