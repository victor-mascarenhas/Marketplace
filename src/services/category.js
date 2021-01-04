import http from '../config/http'

const getCategories = () => {
    return http.get('/category')
}
const createCategory = async (data) => {
    return await http.post(`/category`, data)
}
const patchCategories = (_id, data) => http.patch(`/category/${_id}`, data)
const delCategories = (_id) => http.delete(`/category/${_id}`)

export { getCategories, createCategory, patchCategories, delCategories }