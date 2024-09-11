export class Product{
    constructor(name, quantity, price){
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    toString(){
        return `Name:"${this.name}" - Quantity: ${this.quantity} - Price: ${this.price}`;
    }
}