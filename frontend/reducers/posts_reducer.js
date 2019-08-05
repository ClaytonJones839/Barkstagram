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
        // case RECEIVE_LIKE:
        //     newState = merge({}, state) 
        //     debugger
        //     newState[action.like.id].likers.push(action.like.user_id);
        //     return newState;
        // case REMOVE_LIKE:
        //     newState = merge({}, state)
        //     newState[action.like.id].likers = 
        //         newState[action.like.id].likers.filter(user_id => user_id !== action.like.user_id);
        //     return newState;
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