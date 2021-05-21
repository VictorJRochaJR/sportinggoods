import { generateId } from "../Utils/GenerateID.js"


export default class Product {
    constructor(name, price, quantity, id) {
        this.name = name
        this.price = price
        this.quantity = quantity
        this.id = id
    }
}



