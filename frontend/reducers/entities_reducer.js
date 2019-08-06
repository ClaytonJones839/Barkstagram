import { combineReducers } from 'redux';

import users from './users_reducer';
import posts from './posts_reducer';
import comments from './comment_reducer'

export default combineReducers({
    users,
    posts,
    comments
});