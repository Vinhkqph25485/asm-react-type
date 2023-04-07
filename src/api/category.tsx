import { ICategory } from "../interfaces/category";
import instance from "./instance";

const getAllCategories = () => {
    return instance.get("/categories/")
}

const getOneCategory = (id: number | string) => {
    return instance.get("/categories/" + id)
}

const addCategory = (category:ICategory) => {
    return instance.post("/categories/", category)
}

const deleteCategory = (id: number | string) => {
    return instance.delete("/categories/" + id)
}

const updateCategory = (category: ICategory) => {
    return instance.put("/categories/" + category._id, category)
}

export {getAllCategories, getOneCategory, addCategory, deleteCategory, updateCategory}