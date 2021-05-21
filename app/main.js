import CartController from "./Controllers/CartController.js";
import ProductController from "./Controllers/ProductsController.js";


class App {
  cartController = new CartController();
  productController = new ProductController();
}

window["app"] = new App();
