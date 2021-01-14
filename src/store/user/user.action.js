import { getUser, addToShoppingCart, removeFromShoppingCart } from "../../services/user";
import { toastr } from 'react-redux-toastr'

export const USER_LOADING = "USER_LOADING";
export const GET_SHOPPING_CART = "GET_SHOPPING_CART";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT"


export const getUserProducts = (id) => {   
    

    return async (dispatch) => {
        dispatch({ type: USER_LOADING, status: true })
        const userProducts = await getUser(id)
        dispatch({ type: GET_SHOPPING_CART, data: userProducts.data })
    }
};


export const addProduct = (id) => {
    return async (dispatch) => {        

        dispatch({ type: USER_LOADING, status: true })
        try{
            const res = await addToShoppingCart(id)
            if(res.data){            
            dispatch({ type: ADD_PRODUCT, data: res.data})
            toastr.success('SUCESSO!', 'Produto adicionado ao seu carrinho!')
            getUserProducts()
            }
            
        }       
        catch(error){
            toastr.error('ERRO!', 'Houve um problema ao adicionar produto!')                   
        }
    }
} 



export const removeProduct = (id) => {
    return async (dispatch) => {
        dispatch({ type: USER_LOADING, status: true })
        try{
            const res = await removeFromShoppingCart(id)
            if(res.data){
            dispatch({ type: REMOVE_PRODUCT, data: res.data})
            toastr.success('SUCESSO!', 'Produto removido do seu carrinho!')
            getUserProducts()
            }
        }       
        catch(error){
            toastr.error('ERRO!', 'Houve um problema ao remover produto!')                   
        }
    }
} 
