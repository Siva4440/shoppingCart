import axios from "axios";

export const getAllProductsService = ()=>{
    return axios.get("https://dummyjson.com/products")
}


export const getCategoriesService=()=>{
    return axios.get("https://dummyjson.com/products/categories");
}
export const getProductByCategory = (category)=>{
    return axios.get(`https://dummyjson.com/products/category/${category}`)
}

