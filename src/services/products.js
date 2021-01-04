import http from '../config/http'

const getProduct = () => {
    return http.get('/product')
}

const createProduct = async (data) => {
    return await http.post(`/product`, data)
}

const patchProducts = (_id, data) => http.patch(`/product/${_id}`, data)
const delProduct = (_id) => http.delete(`/product/${_id}`)

export { getProduct, createProduct, patchProducts, delProduct }