import { getProduct, createProduct } from "../../services/products";
import { toastr } from 'react-redux-toastr'

export const PRODUCT_LOADING = "PRODUCT_LOADING";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const CREATE_PRODUCT = "CREATE_PRODUCT";

export const getAllProducts = () => {
    return async (dispatch) => {
        dispatch({ type: PRODUCT_LOADING, status: true })
        const products = await getProduct()
        dispatch({ type: GET_PRODUCTS, data: products.data })
    }
};

export const createNewProduct = (form) => {
    return async (dispatch) => {        

        dispatch({ type: PRODUCT_LOADING, status: true })
        try{
            const res = await createProduct(form)
            if(res.data){
            dispatch({ type: CREATE_PRODUCT, data: res.data})
            toastr.success('SUCESSO!', 'Produto cadastrado com sucesso!')
            getAllProducts()
            }
        }       
        catch(error){
            toastr.error('ERRO!', 'Houve um problema ao cadastrar produto!')                   
        }
    }
} 
