import {SET_VENDOR_LOCATION, } from '../types'

const initialState = {
    vendor: {}
}

export default function (state = initialState, action){
    switch(action.type){
    case SET_VENDOR_LOCATION : 
        return {
            ...state,
            vendor : action.payload
        }

    default : 
        return {
            ...state
        }
    }
}