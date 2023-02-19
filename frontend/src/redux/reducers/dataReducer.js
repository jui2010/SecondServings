import {SET_VENDOR_LOCATION, SET_SELECTED_MEALS} from '../types'

const initialState = {
    vendor: {},
    selectedMeals: []
}

export default function (state = initialState, action){
    switch(action.type){
    case SET_VENDOR_LOCATION : 
        return {
            ...state,
            vendor : action.payload
        }

    case SET_SELECTED_MEALS : 
        let index = state.selectedMeals.findIndex(
            mealItem => mealItem.mealId === action.payload.mealId
        )

        if(index === -1){
            state.selectedMeals[state.selectedMeals.length] = action.payload
        } 
        else {
            state.selectedMeals[index] = {
                ...state.selectedMeals[index],
                quantity :action.payload.quantity
            }
        }
        return {
            ...state,
        }

    default : 
        return {
            ...state
        }
    }
}