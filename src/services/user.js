import http from '../config/http'

const getUser = (id) => {
    return http.get(`/user/${id}`)
}

const addToShoppingCart = async (data) => {
    return await http.post(`/shopcart`, data)
}

const removeFromShoppingCart = (data) => {
    return http.delete(`/shopcart`, {data})
}


export { getUser, addToShoppingCart, removeFromShoppingCart }