import { getCategories, createCategory } from "../../services/category";
import { toastr } from 'react-redux-toastr'

export const CATEGORY_LOADING = "CATEGORY_LOADING";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const CREATE_CATEGORY = "CREATE_CATEGORY";

export const getAllCategories = () => {
    return async (dispatch) => {
        dispatch({ type: CATEGORY_LOADING, status: true })
        const products = await getCategories()
        dispatch({ type: GET_CATEGORIES, data: products.data })
    }
};

export const createNewCategory = (form) => {
    return async (dispatch) => {

        dispatch({ type: CATEGORY_LOADING, status: true })
        try{
            const res = await createCategory(form)
            if(res.data){
            dispatch({ type: CREATE_CATEGORY, data: res.data})
            toastr.success('SUCESSO!', 'Produto cadastrado com sucesso!')
            getAllCategories()
            }
        }       
        catch(error){
            toastr.error('ERRO!', 'Houve um problema ao cadastrar produto!')                   
        }
    }
} 
