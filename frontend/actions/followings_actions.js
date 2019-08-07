import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW'

const receiveFollow = follow => ({
    type: RECEIVE_FOLLOW,
    follow: follow
});

const removeFollow = follow => ({
    type: REMOVE_FOLLOW,
    follow: follow
});

export const createFollow = follow => dispatch => (
    FollowAPIUtil.createFollow(follow)
        .then(res => dispatch(receiveFollow(res)))
);

export const deleteFollow = id => dispatch => (
    FollowAPIUtil.deleteFollow(id)
        .then(res => dispatch(removeFollow(res)))
);

