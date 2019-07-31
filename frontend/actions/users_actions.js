import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveAllUsers = users => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    };
};

const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    };
};

export const fetchUsers = () => dispatch => {
    return UserApiUtil.fetchUsers().
        then(users => {
            return dispatch(receiveAllUsers(users));
        });
};

export const fetchUser = userId => dispatch => {
    return UserApiUtil.fetchUser(userId).
        then(user => {
            return dispatch(receiveUser(user));
        });
};