import { ProxyState } from "../AppState.js"
import { productService } from "../Services/CartServices.js"




export default class ProductsController {
    constructor() {
        console.log("you are in products controller")
        productService.console("dafdasf")
    }
}