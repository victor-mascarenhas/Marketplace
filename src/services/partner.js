import http from '../config/http'

const getPartner = (id) => {
    return http.get(`/user/${id}`)
}



export { getPartner }