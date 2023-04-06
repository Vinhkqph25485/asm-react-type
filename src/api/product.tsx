import { IProduct } from "../interfaces/products";
import instance from "./instance";

const getAllProducts = () => {
    return instance.get("/products/")
}

const getOneProduct = (id: number | string) => {
    return instance.get("/products/" + id)
}

const addProduct = (product:IProduct) => {
    return instance.post("/products/", product)
}

const deleteProduct = (id: number | string) => {
    return instance.delete("/products/" + id)
}

const updateProduct = (product: IProduct) => {
    return instance.put("/products/" + product._id, product)
}

export {getAllProducts, getOneProduct, addProduct, deleteProduct, updateProduct}