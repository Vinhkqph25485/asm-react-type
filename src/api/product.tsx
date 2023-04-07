import { IProduct } from "../interfaces/products";
import instance from "./instance";

export interface IProduct1{
    id: number | string,
    name?: string,
    price?: number,
    image?: string,
    description?: string,
    categoryId?: number | string,

}
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
    return instance.put("/products/" + product.id, product)
}

export {getAllProducts, getOneProduct, addProduct, deleteProduct, updateProduct}