import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_POST = 'RECEIVE_POST';
// export const REMOVE_LIKE = 'REMOVE_LIKE';


const receiveLike = post => ({
    type: RECEIVE_POST,
    post
})

const removeLike = post => ({
    type: RECEIVE_POST,
    post
})

export const createLike = id => dispatch => (
    LikeAPIUtil.createLike(id)
        .then(post => {
            return dispatch(receiveLike(post))
        })
);

export const deleteLike = id => dispatch => (
    LikeAPIUtil.deleteLike(id)
        .then(res => {
            return dispatch(removeLike(res))
        })
);

