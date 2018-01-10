import axios from 'axios'
import { GET_USER_DATA, USER_LOGOUT } from './types'
import { POST_SIGNIN, POST_REGISTER, GET_USER_DATA_API } from '../api'

export const signIn = data => {
    const { username, password } = data
    return async dispatch => {
        try {
            const result = await axios.post(POST_SIGNIN, {
                username,
                password
            })
            localStorage.setItem('key', result.data.token)
            dispatch(saveUserData(result.data.user))  
        } catch (error) {
            console.log(error)
        }
    }
}

export const signUp = data => {
    const {username, password, email} = data
    return async dispatch => {
        try {
            const result = await axios.post(POST_REGISTER, {
                username, 
                password, 
                email
            })
            localStorage.setItem('key', result.data.token)
            dispatch(saveUserData(result.data.user))  
        } catch (error) {
            console.log(error)
        }
    }
}

export const checkUser = () => {
    return async dispatch => {
        try {
            const result = await axios.post(GET_USER_DATA_API, null, {
                headers: { "Authorization": localStorage.getItem('key') }
            })
            dispatch(saveUserData(result.data.user))   
        } catch (error) {
            console.log(error)
        }
    }
}

export const saveUserData = user => {
    return {
        type: GET_USER_DATA,
        payload: user
    }
}
