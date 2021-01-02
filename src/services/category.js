import http from '../config/http'

const getCategories = () => {
    return http.get('/category')
}

const createCategory = async (data) => {
    return await http.post(`/category`, data)
}

export { getCategories, createCategory }