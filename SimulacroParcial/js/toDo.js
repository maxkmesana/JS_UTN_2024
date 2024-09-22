import { deleteTodo, getTodosByUserId, postToDo, putTodo } from "./requests/todoRequests.js";
import { getUsers } from "./requests/userRequests.js";
import { ToDo } from "./common/types.js";


// GET
const todoTable = document.getElementById("table-body");
const userHeader = document.getElementById("user-header");
let selectedUser = undefined;
const param = new URLSearchParams(window.location.search);

document.addEventListener("DOMContentLoaded", async () => {
    selectedUser = await getUsers(param.get("userId"));
    userHeader.textContent = selectedUser.username;
    updateTable();
});

// Contains check, delete and put
function updateTable(){
    todoTable.innerHTML = "";
    getTodosByUserId(selectedUser.id).then((data) => {
        for(let toDoObject of data){
            const newRow = document.createElement("tr");
            newRow.id = toDoObject.id;
            
            const tdId = document.createElement("td");
            tdId.textContent = toDoObject.id;

            const tdTitle = document.createElement("td");
            tdTitle.textContent = toDoObject.title;
            tdTitle.contentEditable = true;

            // EDIT FEATURE (PUT)
            tdTitle.addEventListener("blur", async () => {
                const newTitle = tdTitle.textContent.trim();
                if(newTitle !== "" && newTitle !== toDoObject.title){
                    await putTodo(toDoObject.id, {
                        userId: toDoObject.userId,
                        title: newTitle,
                        completed: toDoObject.completed
                    });
                }
            });

            const tdCompleted = document.createElement("td");
            tdCompleted.textContent = toDoObject.completed === true ? "yes" : "no";

            // DELETE
            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "X";
            deleteBtn.onclick = async function() {
                this.parentElement.remove();
                await deleteTodo(toDoObject.id);
                updateTable();
            };

            // Check button (PUT)
            const checkBtn = document.createElement("button");
            checkBtn.innerText = "CHECK";
            checkBtn.onclick = async function () {
                checkToDo(newRow);
            }

            newRow.append(tdId, tdTitle, tdCompleted);
            newRow.append(checkBtn, deleteBtn); 

            todoTable.appendChild(newRow);
        }
    });
}

async function checkToDo(row){
    console.log("asdasd");
    if(row){
        const cells = row.cells;
        
        if(cells[2].textContent === "yes"){
            cells[2].textContent = "no";

            await putTodo(cells[0].textContent, {
                userId: selectedUser.id,
                title: cells[1].textContent,
                completed: false
            });
        }else{
            cells[2].textContent = "yes";

            await putTodo(cells[0].textContent, {
                userId: selectedUser.id,
                title: cells[1].textContent,
                completed: true
            });
        }
    }
}


// // POST
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

    await postToDo(new ToDo(selectedUser.id, currentTitle, isCompleted));
    updateTable();
});