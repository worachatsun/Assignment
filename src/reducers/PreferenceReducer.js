import { Map } from 'immutable'
import { STORE_PREFERENCE } from '../actions/types'

const INITIAL_STATE = Map({
    preference: {
        language: '', 
        timezone: '', 
        currency: '',
        profile_visibility: '',
        message: '',
        category: '',
        created_by: ''
    }
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STORE_PREFERENCE:
            return state.set('preference', action.payload)
        default:
            return state
    }
}