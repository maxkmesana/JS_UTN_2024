import { deleteTodo, getTodosByUserId, getTodos, postToDo, putTodo } from "./requests/todoRequests.js";
import { getUsers, populateUsers } from "./requests/userRequests.js";
import { ToDo } from "./docs/types.js";

getTodos("6").then(data => console.log(data));
// deleteTodo("3").then(data => console.log(data));

// POST TEST
// const toDo = new ToDo(4, "TEST_TITULO", false);
// postToDo(toDo).then(data => console.log(data));

// const updatedTodo = new ToDo(4, "TITULO_UPDATED", true);
// putTodo("4", updatedTodo).then(data => console.log(data));


// getTodosByUserId("1").then(data => {
//     for(let toDo of data){
//         console.log(toDo);
//     }
// });
