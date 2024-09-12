import axios from 'axios';
import ImportedURL from '../utils/api';

export function AC_ADD_EMPLOYEE(data) {
    try {
        return async function (dispatch) {
            const response = await axios.post(ImportedURL.API.addemp, data);
            dispatch({ type: 'ADD_EMPLOYEE', payload: response.data });
        }
    } catch (error) {
        console.error('------------- Error adding employee:', error);
    }
}

export function AC_LIST_EMPLOYEES(params) {
    try {
        return async function (dispatch) {
            const response = await axios.get(ImportedURL.API.listemp, {params});
            dispatch({ type: 'LIST_EMPLOYEES', payload: response.data.result});
        }
    } catch (error) {
        console.error('------------- Error fetching employees:', error);
    }
}

export function AC_DELETE_EMPLOYEE(id) {
    try {
        return async function (dispatch) {
            await axios.post(ImportedURL.API.deleteemp, { id });
            dispatch({ type: 'DELETE_EMPLOYEE', payload: id });
        }
    } catch (error) {
        console.error('------------- Error deleting employee:', error);
    }
}

export function AC_UPDATE_EMPLOYEE(data) {
    try {
        return async function (dispatch) {
            const response = await axios.post(ImportedURL.API.updateemp,data);
            dispatch({ type: 'UPDATE_EMPLOYEE', payload: response.data });
            console.log('AC_VIEW_EMPLOYEE response:', response.data.result); 
        }
    } catch (error) {
        console.error('------------- Error updating employee:', error);
    }
}

export function AC_VIEW_EMPLOYEE(id) {
    try {
        return async function (dispatch) {
            const response = await axios.post(ImportedURL.API.viewemp, {id});
            dispatch({ type: 'VIEW_EMPLOYEE', payload: response.data.result  });
            return response.data.result;
        }
    } catch (error) {
        console.error('------------- Error fetching employee details:', error);
    }
}

export function AC_HANDLECHANGE_EMPLOYEE(name, value) {
    return function (dispatch) {
        dispatch({ type: 'HANDLECHANGE_EMPLOYEE', name, value });
    }
}

export function AC_CLEAR_EMPLOYEE() {
    return function (dispatch) {
        dispatch({ type: 'CLEAR_EMPLOYEE' });
    }
}