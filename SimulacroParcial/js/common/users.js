import { getUsers } from "../requests/userRequests.js";

let userList = [];
let selectedUserId = undefined;
const userListElement = document.getElementById("user-list");


// LOAD
document.addEventListener("DOMContentLoaded", () => {
    getUsers().then((data) => {
        for(const user of data){
            userList.push(user);
        }
    })
    .then(() => {renderUserList()})
    .catch((error => console.log(error))); // CALLBACK
});

function renderUserList(){
    for(let user of userList){
        const li = document.createElement("li");
        li.id = user.id;
        li.textContent = `Username: ${user.username} - Name: ${user.name}`;
        li.onclick = function(){
            selectedUserId = li.id;
            // getUsers(selectedUserId).then(data => {
            //     userHeader.textContent = data.username;
            // });
            // populateSelectedTodoList(selectedUserId);
        }
        userListElement.appendChild(li);
    }
}

export function getSelectedUserId(){
    return selectedUserId;
}