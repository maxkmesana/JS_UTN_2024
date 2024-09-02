
import { Inventory } from "./Inventory.js";

export class Sale{
    constructor(medicament, quantity){
        this.medicament = medicament;
        this.quantity = quantity;
        this.forceCorrectQuantity()
        this.total = medicament.price * this.quantity;
    }


    forceCorrectQuantity(){
        if(this.medicament.stock < this.quantity){
            this.quantity = this.medicament.stock;
        }
    }

    showDetails(){
        console.log("===========SALE===========");
        this.medicament.showDetails();
        console.log(`Quantity: ${this.quantity}`);
        console.log(`Total: ${this.total}`);
        console.log("==========================");
    }
}