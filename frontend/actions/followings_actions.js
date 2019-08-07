import * as FollowAPIUtil from '../util/followings_api_util';

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const RECEIVE_USER_FOLLOWS = "RECEIVE_USER_FOLLOWS";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

const receiveFollow = follow => ({
    type: RECEIVE_FOLLOW,
    follow
});

const receiveUserFollows = follows => ({
    type: RECEIVE_USER_FOLLOWS,
    follows
});

const removeFollow = follow => ({
    type: REMOVE_FOLLOW,
    follow
});

export const createFollow = follow => dispatch => (
    FollowAPIUtil.createFollow(follow)
        .then(follow => dispatch(receiveFollow(follow)))
);

export const deleteFollow = id => dispatch => (
    FollowAPIUtil.deleteFollow(id)
        .then(follow => dispatch(removeFollow(follow)))
);

export const fetchUserFollows = user_id => dispatch => (
    FollowAPIUtil.fetchUserFollows(user_id)
        .then(follows => {
            return dispatch(receiveUserFollows(follows))
        })
);