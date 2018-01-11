import axios from 'axios'
import { STORE_PREFERENCE, DELETE_PREFERENCE } from './types'
import { POST_CREATE_PREFER, POST_DELETE_PREFER_BY_ID, POST_UPDATE_PREFER, POST_GET_PREFER_BY_ID } from '../api'

export const createPreference = data => {
    const { language, timezone, currency, profileVisibility, message, category, _id } = data
    return async dispatch => {
        try {
            const result = await axios.post(POST_CREATE_PREFER, {
                language, 
                timezone, 
                currency, 
                profile_visibility: profileVisibility, 
                message, 
                category,
                _id
            })
            dispatch({
                type: STORE_PREFERENCE,
                payload: result.data
            })  
        } catch (error) {
            alert(error)
        }
    }
}

export const getPreference = _id => {
    return async dispatch => {
        try {
            const result = await axios.post(POST_GET_PREFER_BY_ID, {
                _id
            })
            dispatch({
                type: STORE_PREFERENCE,
                payload: result.data
            })  
        } catch (error) {
            alert(error)
        }
    }
}

export const deletePreference = _id => {
    return async dispatch => {
        try {
            await axios.post(POST_DELETE_PREFER_BY_ID, {
                _id
            })
            dispatch({
                type: DELETE_PREFERENCE
            })  
        } catch (error) {
            alert(error)
        }
    }
}

export const updatePreference = data => {
    const { language, timezone, currency, profileVisibility, message, category, _id } = data
    return async dispatch => {
        try {
            const result = await axios.post(POST_UPDATE_PREFER, {
                language, 
                timezone, 
                currency, 
                profile_visibility: profileVisibility, 
                message, 
                category,
                _id
            })
            dispatch({
                type: STORE_PREFERENCE,
                payload: result.data
            })  
        } catch (error) {
            alert(error)
        }
    }
}
