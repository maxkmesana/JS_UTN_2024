import { Inventory } from "./Farmacia/Inventory.js";
import { Medicament } from "./Farmacia/Medicament.js";

const inventory = new Inventory();

function submit(event){
    event.preventDefault();

    let medicament = getMedicament();
    console.log(medicament);
    if(medicament === undefined){
        clearInputs();
        alert("At least one field is empty or invalid. Try again");
        return;
    }

    inventory.addMedicament(medicament);
    clearInputs();
    alert("Medicament added succesfully!");
}

function clearInputs(){
    document.getElementById('ID').value = "";
    document.getElementById('name').value = "";
    document.getElementById('price').value = "";
    document.getElementById('stock').value = "";
}

function getMedicament(){
    const id = document.getElementById('ID').value;
    if(typeof id !== "string" || id === ""){
        return undefined
    }
    console.log(id);

    const name = document.getElementById('name').value;
    if(typeof name !== "string" || name === ""){
        return undefined
    }

    const price = document.getElementById('price').value;
    if(typeof price !== "string" || price === ""){
        return undefined
    }

    const stock = document.getElementById('stock').value;
    if(typeof stock !== "string" || stock === ""){
        return undefined
    }

    return new Medicament(id,name,price,stock);
}

// Function to load the navbar from navbar.html
document.addEventListener("DOMContentLoaded", function() {
    fetch('nav.html') // Fetch the external navbar file
        .then(response => response.text()) // Get the text content
        .then(data => {
            document.getElementById('navbar').innerHTML = data; // Insert it into the placeholder
        })
        .catch(error => console.error('Error loading navbar:', error));
});

document.getElementById("medication-form").addEventListener("submit", (event) => submit(event));

inventory.printInventory();