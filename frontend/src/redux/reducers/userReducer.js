import { SET_AUTHENTICATED } from '../types'

const initialState = {
    user : {},
    state : false
}

export default function(state = initialState , action){
    switch(action.type){
        case SET_AUTHENTICATED :
            return {
                ...state,
                authenticated : true
            }

        default : 
            return {
                ...state
            }
    }
} 