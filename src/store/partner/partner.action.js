import { getPartner } from "../../services/partner";

export const PARTNER_LOADING = "PARTNER_LOADING";
export const GET_PARTNER = "GET_PARTNER";


export const getPartnerProducts = (id) => {   
    

    return async (dispatch) => {
        dispatch({ type: PARTNER_LOADING, status: true })
        const partnerProducts = await getPartner(id)
        dispatch({ type: GET_PARTNER, data: partnerProducts.data })
    }
};


