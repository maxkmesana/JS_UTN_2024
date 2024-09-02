import { Medicament } from "./Medicament.js";

export class Inventory{
    constructor(){
        this.inventory = [];
        this.sales = []; // NOT REQUESTED BUT ADDED FOR SIMPLICITY
    }

    

    addMedicament(medicament){
        if(medicament === undefined){
            console.log("At least one field entered is not valid. Medicament not added.")
            return;
        }
        this.inventory.push(medicament);
    }

    findMedicament(id){
        return this.inventory.find(item =>
            item.id === id
        );
    }

    printInventory(){
        this.inventory.forEach(element => {
            element.showDetails();
        });
    }

    printSales(){
        this.sales.forEach(element => {
            element.showDetails();
        });
    }

    addSale(sale){ // SE EJECUTA EN EL MAIN
        this.sales.push(sale);
        this.inventory.forEach(element =>{
            if(element.id === sale.medicament.id){
                element.stock -= sale.quantity;
                if(element.stock < 0) element.stock = 0;
            }
        })
    }

    updateStock(id, newStock){
        this.inventory.forEach(element => {
            if(element.id === id){
                element.stock = newStock;
                alert("Medicament stock updated succesfully!");
            }
        })
    }
}