import merge from 'lodash/merge';

import { 
    RECEIVE_ALL_POSTS, 
    RECEIVE_POST, 
    REMOVE_POST 
} from '../actions/posts_actions';

import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/likes_actions';

const postsReducer = ( state={}, action ) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_LIKE:
            newState = action.like.likers.push(action.like.user_id)
            return merge({}, state, newState)
        case REMOVE_LIKE:
            newState = action.like.likers.filter(user_id => user_id !== action.like.user_id);
            return merge({}, state, newState)
        case RECEIVE_ALL_POSTS:
            return action.posts
        case RECEIVE_POST:
            return merge({}, state, {[action.post.id]: action.post})
        case REMOVE_POST:
            newState = merge({}, state)
            delete newState[action.postId]
            return newState
        default:
            return state;
    }
}

export default postsReducer;