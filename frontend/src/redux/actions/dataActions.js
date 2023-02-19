import {SET_VENDOR_LOCATION, SET_SELECTED_MEALS} from '../types'

//set selected vendor from the map
export const setVendor = (vendor) => (dispatch) => {
    dispatch({
        type : SET_VENDOR_LOCATION,
        payload : vendor
    })
}

//set selected meal from the map
export const setSelectedMeals = (meal) => (dispatch) => {
    dispatch({
        type : SET_SELECTED_MEALS,
        payload : meal
    })
}