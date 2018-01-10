import axios from 'axios'
import { GET_USER_DATA, USER_LOGOUT } from './types'
import { POST_SIGNIN, POST_REGISTER } from '../api'

export const signIn = data => {
    const { username, password } = data
    return dispatch => {
        return axios.post(POST_SIGNIN, {
            username,
            password
        }).then(response => {
            localStorage.setItem('key', response.data.token)
            dispatch(saveUserData(response.data.user))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const saveUserData = user => {
    return {
        type: GET_USER_DATA,
        payload: user
    }
}
