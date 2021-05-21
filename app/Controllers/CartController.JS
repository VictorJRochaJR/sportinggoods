import { ProxyState } from "../AppState.js"
import { cartService } from "../Services/CartServices.js"




export default class CartsController {
    constructor() {
        console.log("you are in carts controller")
        cartService.hello("dafdasf")
    }
}