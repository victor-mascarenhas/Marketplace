import { saveLocalStorage } from "../../config/auth";
import authService from '../../services/auth'
import { createUser } from '../../services/signup'
import history from '../../config/history'
import { toastr } from 'react-redux-toastr'

export const SIGN = "SIGN";
export const SIGN_LOADING = "SIGN_LOADING";
export const SIGN_UP = "SIGN_UP";

export const signIn = (props) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SIGN_LOADING, loading: true })
            const { data } = await authService(props)
            dispatch({ type: SIGN, data: data })
            saveLocalStorage(data)
            history.push('/')
        } catch (error) {
            console.log(error.message)
        }
    }
};

export const signUp = (props) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SIGN_LOADING, loading: true })
            const { data } = await createUser(props)           
            dispatch({ type: SIGN_UP, data: data })
            toastr.success('SUCESSO!', 'Usuário criado com sucesso!')
            history.push('/')

        } catch (error) {
            toastr.error('ERRO!', 'Houve um problema ao criar usuário!')
            console.log(error.message)
        }
    }
};

