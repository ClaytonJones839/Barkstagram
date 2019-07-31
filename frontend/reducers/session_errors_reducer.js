import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
    CLEAR_SESSION_ERRORS,
} from '../actions/session_actions';

// const _nullUser = Object.freeze({
//     id: null
// });


export default (state = [], action) => {
    Object.freeze(state);
    let newState = [];
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case CLEAR_SESSION_ERRORS:
            return newState;
        case RECEIVE_CURRENT_USER:
            return newState;
        default:
            return state;
    }
};
