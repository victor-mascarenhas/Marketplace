import http from '../config/http'

const getProduct = () => {
    return http.get('/product')
}

const createProduct = async (data) => {
    return await http.post(`/product`, data)
}

export { getProduct, createProduct }