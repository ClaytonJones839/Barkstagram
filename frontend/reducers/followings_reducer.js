import {
    RECEIVE_FOLLOW,
    REMOVE_FOLLOW
} from '../actions/followings_actions';

const followsReducer = ( state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FOLLOW:
            return Object.assign({}, state, { [action.follow.user_id]: action.follow });
        case REMOVE_FOLLOW:
            let newState = Object.assign({}, state);
            delete newState[action.follow.user_id];
            return newState;
        default:
            return state;
    }
};

export default followsReducer;