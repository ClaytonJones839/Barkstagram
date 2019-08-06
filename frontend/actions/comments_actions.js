import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_POST_COMMENTS = 'RECEIVE_POST_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

const receivePostComments = comments => ({
    type: RECEIVE_POST_COMMENTS,
    comments
})

const removeComment = comment => ({
    type: REMOVE_COMMENT,
    comment
})

export const createComment = comment => dispatch => (
    CommentAPIUtil.createComment(comment)
        .then(comment => {
            return dispatch(receiveComment(comment))
        })
);

export const fetchPostComments = post_id => dispatch => (
    CommentAPIUtil.fetchPostComments(post_id)
        .then(comments => {
            return dispatch(receivePostComments(comments))
        })
);

export const deleteComment = id => dispatch => (
    CommentAPIUtil.deleteComment(id)
        .then(res => {
            return dispatch(removeComment(res))
        })
);

