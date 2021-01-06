import { getProduct, createProduct, patchProducts, delProduct, OneProduct} from "../../services/products";
import { getPartner } from "../../services/partner";
import { toastr } from 'react-redux-toastr'

export const PRODUCT_LOADING = "PRODUCT_LOADING";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const PATCH_PRODUCT = "PATCH_PRODUCT";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const GET_ONE_PRODUCT = "GET_ONE_PRODUCT";
export const GET_ONE_PARTNER = "GET_ONE_PARTNER";


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

export const updateProduct = (id, form) => {
    return async (dispatch) => {
        dispatch({ type: PRODUCT_LOADING, status: true })
        try{
            const res = await patchProducts(id, form)
            if(res.data){
            dispatch({ type: PATCH_PRODUCT, data: res.data})
            toastr.success('SUCESSO!', 'Produto atualizado com sucesso!')
            getAllProducts()
            }
        }       
        catch(error){
            toastr.error('ERRO!', 'Houve um problema ao atualizar produto!')                   
        }
    }
} 

export const setProduct = (props) => {
    return async (dispatch) => {
        dispatch({ type: SET_PRODUCTS, data: props })
    }
};

export const deleteProduct = (props) => {
    return async (dispatch) => {
        dispatch({ type: PRODUCT_LOADING, status: true })
        try{
            const res = await delProduct(props)
            if(res.data){
            dispatch({ type: DELETE_PRODUCT, data: res.data})
            toastr.success('SUCESSO!', 'Produto excluído com sucesso!')
            getAllProducts()
            }
        }       
        catch(error){
            toastr.error('ERRO!', 'Houve um problema ao excluir produto!')                   
        }
    }
} 


export const getOneProduct = (id) => {
    return async (dispatch) => {
        dispatch({ type: PRODUCT_LOADING, status: true })
        const product = await OneProduct(id)
        if(product.data){
        dispatch({ type: GET_ONE_PRODUCT, data: product.data})
         const partner = await getPartner(product.data.partner._id)
        if(partner.data){
        dispatch({ type: GET_ONE_PARTNER, data: partner.data})
    } }}
};

