import {SET_VENDOR_LOCATION} from '../types'

//set selected location from the map
export const setVendor = (vendor) => (dispatch) => {
    dispatch({
        type : SET_VENDOR_LOCATION,
        payload : vendor
    })
}