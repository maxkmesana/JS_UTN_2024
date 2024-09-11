import { Product } from "./Product.js";

let products = [];

function clearInputs(){
    document.getElementById("name").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
}

/**
 * 
 * @param {Product} product 
 */
function isInvalid(product){
    if(product.name.trim() === "" ||
        product.price.trim() === "" ||
        product.quantity.trim() === ""){
           alert("At least one field is empty, please fill them and try again.");
           return true;
    }

    if(isNaN(parseFloat(product.quantity))){
        alert("At least one field that should be a number, is not. Try again.");
        return true;
    }

    if(isNaN(parseFloat(product.price))){
        alert("At least one field that should be a number, is not. Try again.");
        return true;
    }

    
    return false;
}

function updateTotal(){
    let total = 0;
    products.forEach((element) => {
        total +=  Number(element.price * element.quantity);
    });

    document.getElementById("total").textContent = `Total price: ${total}`
}

function updateList(){
    const list = document.getElementById("cart-content-list").getElementsByTagName("li");
    let searchValue = document.getElementById("filter-bar").value.toLowerCase();
    

    for(let element of list){
        if(element.id.toLowerCase().includes(searchValue)){
            element.style.display = "";
        }else{
            element.style.display = "none";
        }
    }
}

function submit(){
    const name = document.getElementById("name").value;
    const quantity = document.getElementById("quantity").value;
    const price = document.getElementById("price").value;

    const product = new Product(name,quantity,price);

    if(isInvalid(product)){
        return;
    }

    products.push(product);
    const li = document.createElement("li");
    li.id = product.name;
    li.onclick = function(){
        products = products.filter((element) => this.id !== element.name);
        this.remove();
        updateTotal();
    }
    li.textContent = product.toString();
    document.getElementById("cart-content-list").appendChild(li);

    updateTotal();

    updateList(); 

    clearInputs();
}

function enterSubmit(event){
    if(event.key === 'Enter'){
        submit();
    }
}

function emptyList(){
    products = [];
    const list = document.getElementById("cart-content-list").getElementsByTagName("li");
    document.getElementById("cart-content-list").innerHTML = "";

    updateTotal();
}


document.getElementById("add-button").addEventListener("click", submit);

document.getElementById("name").addEventListener("keydown", (event) => enterSubmit(event));
document.getElementById("quantity").addEventListener("keydown", (event) => enterSubmit(event));
document.getElementById("price").addEventListener("keydown", (event) => enterSubmit(event));

document.getElementById("filter-bar").addEventListener("input", updateList);

document.getElementById("empty-list").addEventListener("click", emptyList);



