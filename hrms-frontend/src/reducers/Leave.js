const initialState = {
    leave: {
        leaveType: '',
        fromDate: '',
        toDate: '',
        reason: '',
    },
    listLeave: null,
}

const leaveReducer = (state = initialState, action) => {
    // console.log('------state-----', state, action);
    switch (action.type) {
        case 'VIEW_LEAVE':
            return {
                ...state,
                leave: action.payload ? action.payload : null,
            }
        case 'LIST_LEAVE':
            return {
                ...state,
                listLeave: action.payload ? action.payload : null,
            }
        // case 'HANDLECHANGE_LEAVE':
        //     return object.assign({}, state, {
        //         leave: {
        //             ...state, leave,
        //             [action.name]: action.value
        //         }
        //     })
        case 'CLEAR_LEAVE':
            return {
                ...state,
                leave: initialState.data,
            }

        default:
            return state;
    }
}
export default leaveReducer;