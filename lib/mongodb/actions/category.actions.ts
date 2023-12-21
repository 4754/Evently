"use server"

import { handleError } from "@/lib/utils"
import { CreateCategoryParams } from "@/types"
import { connectToDatabase } from "../database"
import Category from "../database/models/category.model"

// create a new category
export const  createCategory= async({ categoryName}: CreateCategoryParams)=>{
    try {
        await connectToDatabase();
        const newCategory = await Category.create({name: categoryName});

        return JSON.parse(JSON.stringify(newCategory));
    } catch (error) {
        handleError(error)
    }

}

// fetch all category
export const getAllCategories = async() => {
    try {
        await connectToDatabase();
        const categories = await Category.find();

        return JSON.parse(JSON.stringify(categories));
    } catch (error) {
        handleError(error)
    }
}