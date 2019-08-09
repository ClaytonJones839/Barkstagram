import {
    RECEIVE_COMMENT_ERRORS,
    CLEAR_COMMENT_ERRORS,
} from '../actions/comments_actions';

export default (state = [], action) => {
    Object.freeze(state);
    let newState = [];
    switch (action.type) {
        case RECEIVE_COMMENT_ERRORS:
            return action.errors;
        case CLEAR_COMMENT_ERRORS:
            return newState;
        default:
            return state;
    }
};