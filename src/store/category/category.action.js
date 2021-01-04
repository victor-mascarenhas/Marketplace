import { getCategories, createCategory, patchCategories, delCategories } from "../../services/category";
import { toastr } from 'react-redux-toastr'

export const CATEGORY_LOADING = "CATEGORY_LOADING";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const PATCH_CATEGORY = "PATCH_CATEGORY";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const DELETE_CATEGORY = "DELETE_CATEGORY";

export const getAllCategories = () => {
    return async (dispatch) => {
        dispatch({ type: CATEGORY_LOADING, status: true })
        const categories = await getCategories()
        dispatch({ type: GET_CATEGORIES, data: categories.data })
    }
};

export const createNewCategory = (form) => {
    return async (dispatch) => {

        dispatch({ type: CATEGORY_LOADING, status: true })
        try{
            const res = await createCategory(form)
            if(res.data){
            dispatch({ type: CREATE_CATEGORY, data: res.data})
            toastr.success('SUCESSO!', 'Categoria cadastrada com sucesso!')
            getAllCategories()
            }
        }       
        catch(error){
            toastr.error('ERRO!', 'Houve um problema ao criar categoria!')                   
        }
    }
} 

export const patchCategory = (id, form) => {
    return async (dispatch) => {
        dispatch({ type: CATEGORY_LOADING, status: true })
        try{
            const res = await patchCategories(id, form)
            if(res.data){
            dispatch({ type: PATCH_CATEGORY, data: res.data})
            toastr.success('SUCESSO!', 'Categoria atualizada com sucesso!')
            getAllCategories()
            }
        }       
        catch(error){
            toastr.error('ERRO!', 'Houve um problema ao atualizar categoria!')                   
        }
    }
} 

export const setCategory = (props) => {
    return async (dispatch) => {
        dispatch({ type: SET_CATEGORIES, data: props })
    }
};

export const deleteCategory = (props) => {
    return async (dispatch) => {
        dispatch({ type: CATEGORY_LOADING, status: true })
        try{
            const res = await delCategories(props)
            if(res.data){
            dispatch({ type: DELETE_CATEGORY, data: res.data})
            toastr.success('SUCESSO!', 'Categoria excluída com sucesso!')
            getAllCategories()
            }
        }       
        catch(error){
            toastr.error('ERRO!', 'Houve um problema ao excluir categoria!')                   
        }
    }
} 
