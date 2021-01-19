import http from '../config/http'

const getPartner = (id) => {
    return http.get(`/user/${id}`)
}

const patchPartner = (data) => http.patch(`/partner`, data)

const getAllPartners = () => {
    return http.get('/partner')
}


export { getPartner, patchPartner, getAllPartners }