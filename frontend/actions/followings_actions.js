import * as FollowAPIUtil from '../util/follow_api_util';

// export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
// export const RECEIVE_USER_FOLLOWS = "RECEIVE_USER_FOLLOWS";
// export const REMOVE_FOLLOW = "REMOVE_FOLLOW";
export const RECEIVE_USER = 'RECEIVE_USER';


const receiveFollow = user => ({
    type: RECEIVE_USER,
    user
});

// const receiveUserFollows = follows => ({
//     type: RECEIVE_USER_FOLLOWS,
//     follows
// });

const removeFollow = user => ({
    type: RECEIVE_USER,
    user
});

export const createFollow = follow => dispatch => (
    FollowAPIUtil.createFollow(follow)
        .then(res => dispatch(receiveFollow(res)))
);

export const deleteFollow = id => dispatch => (
    FollowAPIUtil.deleteFollow(id)
        .then(res => dispatch(removeFollow(res)))
);

// export const fetchUserFollows = user_id => dispatch => (
//     FollowAPIUtil.fetchUserFollows(user_id)
//         .then(follows => {
//             return dispatch(receiveUserFollows(follows))
//         })
// );