import http from '../config/http'

const getPartner = (id) => {
    return http.get(`/user/${id}`)
}

const patchPartner = (data) => http.patch(`/partner`, data)



export { getPartner, patchPartner }