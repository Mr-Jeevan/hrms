import axios from 'axios';
import ImportedURL from '../utils/api'


export function AC_ADD_LEAVE() {
    try {
        return async function (dispatch) {
            const response = await axios.post(ImportedURL.API.addDepartment, { params });
            dispatch({ type: "ADD_LEAVE", payload: response.data });
        }
    } catch (error) {
        console.error('------------- Error adding Leave Documents:', error);
    }
}

export function AC_HANDLECHANGE_LEAVE(params) {
    return function (dispatch) {
        dispatch({ type: "HANDLECHANGE_LEAVE", params });
    }
}

export function AC_VIEW_LEAVE(ID) {
    try {
        return async function (dispatch) {
            const response = await axios.get(ImportedURL.API.viewDepartment, { params });
            dispatch({ type: "VIEW_LEAVE", payload: response.data })
        }
    } catch (error) {
        console.error('------------- Error fetching Leave Documents:', error);
    }
}
export function AC_VIEW_LEAVE(params) {
    try {
        return {
            type: 'CLEAR_LEAVE',
        }
    } catch (error) {
        console.error('------------- Error deleting Leave:', error);
    }
}
