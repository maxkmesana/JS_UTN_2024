"use strict"

import { Inventory } from "./Inventory.js";
import { Medicament } from "./Medicament.js";
import { Sale } from "./Sale.js"

let inventory = new Inventory();
mainMenu();

// TODO: IMPLEMENT PERSISTENCE!!!!!!!!!!!
function mainMenu(){
    while(true){
        let choice = Number(prompt(`
            1- Stock up medicament.
            2- Make sale.
            3- Update medicament stock.
            4- List all medicaments.
            5- List all sales.
            0- Exit.
            Input your choice below:
            `));
        switch(choice){
            case 1:
                let medicament = createMedicament();
                if(medicament === undefined){
                    alert("At least one field is empty or not valid. Try again.");
                    continue;
                }
                inventory.addMedicament(medicament);
                console.log("MEDICAMENT SUCCESFULLY ADDED.");
                break;
            case 2:
                let sellMedicament = inventory.findMedicament(Number(prompt("Input the ID of the medicament to be sold:")));
                if(sellMedicament === undefined){
                    alert("The ID does not match with a valid medicament ID. Try again.");
                    continue;
                }
                let sale = createSale(sellMedicament);
                if(sellMedicament === undefined){
                    alert("Quantity is not valid. Try again.");
                    continue;
                }
                inventory.addSale(sale);
                console.log("SALE SUCCESSFULLY MADE.")
                break;
            case 3:
                let findId = Number(prompt("Input the ID of the medicament to be updated:"))
                let searchElement = inventory.findMedicament(findId);
                if(searchElement === undefined){
                    alert("The medicament could not be found. Try again.");
                    continue;
                }

                let newQuantity = createNewQuantity();
                if(newQuantity === undefined){
                    alert("The new quantity is not valid. Try again.");
                    continue;
                }

                inventory.updateStock(findId, newQuantity);
                break;
            case 4:
                inventory.printInventory();
                alert("Medicament list has been printed to console.");
                break;
            case 5:
                inventory.printSales();
                alert("Sales register has been printed to console.");
                break;
            case 0:
                return;
                break;
            default:
                alert("Your choice is not valid. Try again.");
                continue;
                break;
        }
    }
}
function createNewQuantity(){
    const quantity = Number(prompt("Input the new quantity for the medicament: "));
    if(typeof quantity !== "number" || quantity === ""){
        return undefined
    }

    return quantity;
}

function createSale(medicament){
    const quantity = Number(prompt("Input quantity to be sold (only maximum quantity can be sold): "));
    if(typeof quantity !== "number" || quantity === ""){
        return undefined
    }

    return new Sale(medicament,quantity);
}

function createMedicament(){
    const name = prompt("Input name of medicament: ");
    if(typeof name !== "string" || name === ""){
        return undefined
    }

    const id = Number(prompt("Input ID of medicament: "));
    if(typeof id !== "number" || id === ""){
        return undefined
    }

    const price = Number(prompt("Input price of medicament: "));
    if(typeof price !== "number" || price === ""){
        return undefined
    }

    const stock = Number(prompt("Input stock of medicament: "));
    if(typeof price !== "number" || price === ""){
        return undefined
    }

    return new Medicament(id,name,price,stock);
}








// console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

// let medicamento1 = new Medicament(0,"qura",100,10);
// let medicamento2 = new Medicament(0,"tafirol PLUS",300,5);

// medicamento1.showDetails();
// medicamento2.showDetails();

// let inventory = new Inventory();

// inventory.addMedicament(medicamento1);
// inventory.addMedicament(medicamento2);

// inventory.printInventory();

// console.log("------------------------------------\n");
// let sale = new Sale(medicamento1,11);
// inventory.addSale(sale)

// inventory.printSales();





// createMedicament(){
//     const name = prompt("Input name of medicament: ");
//     if(typeof name !== "string" || name === ""){
//         return undefined
//     }

//     const id = prompt("Input ID of medicament: ");
//     if(typeof id !== "number" || id === ""){
//         return undefined
//     }

//     const price = prompt("Input price of medicament: ");
//     if(typeof price !== "number" || price === ""){
//         return undefined
//     }

//     const stock = prompt("Input stock of medicament: ");
//     if(typeof price !== "number" || price === ""){
//         return undefined
//     }

//     return new Medicament(id,name,price,stock);
// }