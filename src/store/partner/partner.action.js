import { getPartner } from "../../services/partner";

export const PARTNER_LOADING = "PRODUCT_LOADING";
export const GET_PARTNER = "GET_PRODUCTS";


export const getPartnerProducts = (props) => {   
    

    return async (dispatch) => {
        dispatch({ type: PARTNER_LOADING, status: true })
        const partnerProducts = await getPartner(props)
        dispatch({ type: GET_PARTNER, data: partnerProducts.data })
    }
};


