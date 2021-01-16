import { getPartner, patchPartner } from "../../services/partner";
import { toastr } from 'react-redux-toastr'

export const PARTNER_LOADING = "PARTNER_LOADING";
export const GET_PARTNER = "GET_PARTNER";
export const GET_PARTNER_PRODUCTS = "GET_PARTNER_PRODUCTS";
export const PATCH_PARTNER = "PATCH_PARTNER";


export const getPartnerProducts = (id) => {   
    

    return async (dispatch) => {
        dispatch({ type: PARTNER_LOADING, status: true })
        const partnerProducts = await getPartner(id)
        dispatch({ type: GET_PARTNER_PRODUCTS, data: partnerProducts.data })
    }
};

export const getOnePartner = (id) => {       

    return async (dispatch) => {
        dispatch({ type: PARTNER_LOADING, status: true })
        const partner = await getPartner(id)
        dispatch({ type: GET_PARTNER, data: partner.data })
    }
};

export const updatePartner = (id, form) => {
    return async (dispatch) => {
        dispatch({ type: PARTNER_LOADING, status: true })
        try{
            const res = await patchPartner(form)
            if(res.data){
            dispatch({ type: PATCH_PARTNER, data: res.data})
            toastr.success('SUCESSO!', 'Parceiro atualizado com sucesso!')
            getOnePartner(id)
            }
        }       
        catch(error){
            toastr.error('ERRO!', 'Houve um problema ao atualizar parceiro!')                   
        }
    }
} 



