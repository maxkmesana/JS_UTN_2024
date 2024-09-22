

import { deleteTodo, getTodosByUserId, postToDo, putTodo } from "./requests/todoRequests.js";
import { getUsers } from "./requests/userRequests.js";
import { ToDo } from "./common/types.js";
import { getSelectedUserId } from "./common/users.js";



// GET
const userList = document.getElementById("user-list");
const toDoList = document.getElementById("todo-list");
const userHeader = document.getElementById("user-header");

// On click of user (li), get user's toDos and show them in list
userList.addEventListener("click", (event) => {
    toDoList.innerHTML = ""; // start anew
    if(event.target.tagName === "LI"){

        // get username from userId and update header
        getUsers(event.target.id).then(data =>{
            userHeader.textContent = data.username;
        });

        updateToDoList();
    }
});

// finds user's todos, renders them in LIs with delete buttons.
function updateToDoList(){
    toDoList.innerHTML = "";
    let usersTodos = [];
    getTodosByUserId(getSelectedUserId()).then((data) => { 
        for(let toDoObject of data){
            // prepare LI
            const li = document.createElement("li");
            li.id = toDoObject.id;
            let liTextContent = `Title: ${toDoObject.title}`;
            liTextContent += toDoObject.completed === true ? `, Completed: yes` : `, Completed: no`;
            li.textContent =  liTextContent;    

            // prepare delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'X';

            // DELETE
            deleteBtn.onclick = async function() {
                this.parentElement.remove();
                await deleteTodo(toDoObject.id);
                updateToDoList();
            };

            // append LI and delete button
            li.appendChild(deleteBtn);
            toDoList.appendChild(li);
        }
    });
}

// POST
const submitBtn = document.getElementById("todo-submit-btn");
const titleInput = document.getElementById("title-input");
const radioTrue = document.getElementById("radio-true");

submitBtn.addEventListener("click", async (event) =>  {
    event.preventDefault();
    const currentTitle = titleInput.value;
    const isCompleted = radioTrue.checked === true ? true : false;
    
    if(currentTitle.trim() === ""){
        alert("Title can't be empty. Please try again.");
        return;
    }

    await postToDo(new ToDo(getSelectedUserId(), currentTitle, isCompleted));
    updateToDoList();
});

// PUT
// let selectedLi = undefined;
// toDoList.addEventListener("click", (event) => {
//     if(event.target.tagName === 'LI'){

//     }
// })










// document.addEventListener("DOMContentLoaded", () => {
//     getUsers().then(data => {
//         for(let user of data){
//             userList.push(user);
//         }
//         console.log("Initial users database populated successfully!");
//     })
//     .catch(error => console.log(`Could not populate user database: ${error}`));
// });

// const userListElement = document.getElementById("user-list");
// const userHeader = document.getElementById("user-header");
// const toDoListElement = document.getElementById("todo-list");
// const submitToDo = document.getElementById("todo-submit-btn");
// const title = document.getElementById("title-input");
// const radioTrue = document.getElementById("radio-true");

// let liToModify = undefined;
// let titleToModify = undefined;
// let radioToModify = undefined;

// let selectedUserId = undefined;

// GET
// function populateSelectedTodoList(){
//     toDoListElement.innerHTML = "";
//     toDoList = [];

//     getTodosByUserId(selectedUserId).then((data) => {renderToDoList()})
//     .catch((error) => console.log(error));
// }

// function renderToDoList(){
//     for(let toDoItem of toDoList){
//         const li = document.createElement("li");
//         li.id = toDoItem.id;

//         let liTextContent = `Title: ${toDoItem.title}`;
//         liTextContent += toDoItem.completed === true ? `, Completed: yes` : `, Completed: no`;
//         li.textContent =  liTextContent;

//         const deleteBtn = document.createElement('button');
//         deleteBtn.innerText = 'X';
//         deleteBtn.onclick = function() {
//             this.parentElement.remove();
//             deleteToDo(toDoItem.id);
//         };
//         li.appendChild(document.createTextNode('\u00A0\u00A0')); // Add some space
//         li.appendChild(deleteBtn);

//         toDoListElement.appendChild(li);
//     }
// }

// POST/PUT
// submitToDo.addEventListener("click",(event) => {
//     event.preventDefault();
    

//     // POST
//     const currentTitle = title.value;
//     let isCompleted = radioTrue.checked === true ? true : false;

//     if(currentTitle.trim() === ""){
//         alert("Title can't be empty. Try again.");
//         return;
//     }
//     postToDo(new ToDo(selectedUserId, currentTitle, isCompleted));
//     title.value = "";
//     populateSelectedTodoList();
// });

// userListElement.addEventListener("click", (event) => {
//     if(event.target.tagName === 'LI'){
//         selectedUserId = event.target.id;
//         getUsers(selectedUserId).then(data => {userHeader.textContent = data.username});
//         populateSelectedTodoList();
//     }
// });

// function isValidToDo(currentTitle){
//     if(currentTitle == null || currentTitle.trim() === ""){
//         alert("Title can't be empty. Please try again.");
//         return false;
//     }
// }

// // DELETE
// function deleteToDo(id){
//     deleteTodo(id)
//     .then(data => console.log(`Deleted: ${JSON.stringify(data)}`))
//     .catch(error => console.log(error))
// }

// // PUT
// toDoListElement.addEventListener("click", (event) => {
//     if(event.target.tagName === 'LI'){
//         if(liToModify !== undefined) liToModify.style.backgroundColor = null;
//         liToModify = event.target;
//         liToModify.style.backgroundColor = 'yellow';
//     }
// });
