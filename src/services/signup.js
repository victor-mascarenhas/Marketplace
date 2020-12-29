import http from '../config/http'


const createUser = async (data) => {
    return await http.post(`/user`, data)
}

export { createUser }