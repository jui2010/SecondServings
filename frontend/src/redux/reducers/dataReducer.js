import {SET_VENDOR_LOCATION, SET_SELECTED_MEALS, ADD_MEAL} from '../types'

const initialState = {
    vendor: {},
    selectedMeals: [], 
    meals : [
        {
            "id" : "1",
            "vendorName": "Benson Bon Appetit - SCU",
            "name":"Salad",
            "price":3.27,
            "ingredients":"egg, lettuce, beans, chicken",
            "qty": 4,
            "photoURL":"https://64.media.tumblr.com/09c19064292cb5178b5362661354b0dd/795d2370ed39d1d6-0f/s640x960/0a45acfad42ddfbd2cc58050256029967474f4b1.jpg"
        }
    ]
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

    case ADD_MEAL : 
        state.meals.push(action.payload)
        return {
            ...state,
        }


    default : 
        return {
            ...state
        }
    }
}