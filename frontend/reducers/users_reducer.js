import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_ALL_USERS, REMOVE_USER } from '../actions/users_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/followings_actions';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state)
    switch (action.type) {
        case RECEIVE_FOLLOW:
            newState[action.follow.followed_user_id].followerIds.push(action.follow.user_id)
            newState[action.follow.user_id].followingIds.push(action.follow.followed_user_id)
            return newState;
        case REMOVE_FOLLOW:
            newState[action.follow.followed_user_id].followerIds = newState[action.follow.followed_user_id].followerIds
                .filter(userId => userId !== action.follow.user_id)
            newState[action.follow.user_id].followingIds = newState[action.follow.user_id].followingIds
                .filter(followedId => followedId !== action.follow.followed_user_id)
            return newState;
        case RECEIVE_ALL_USERS:
            return merge({}, state, action.users);
        case RECEIVE_USER:
            return merge({}, state, { [action.user.id]: action.user });
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.currentUser.id]: action.currentUser });
        case REMOVE_USER:
            delete newState[action.postId]
            return newState
        default:
            return state;
    }
};

export default usersReducer;
