import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST'
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';
export const CLEAR_POST_ERRORS = 'CLEAR_POST_ERRORS';

const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
});

const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

const removePost = postId => ({
    type: REMOVE_POST,
    postId
});

const receivePostErrors = errors => ({
    type: RECEIVE_POST_ERRORS,
    errors: errors
});

export const clearErrors = () => ({
    type: CLEAR_POST_ERRORS,
    errors: []
});

export const fetchPosts = () => dispatch => (
    PostAPIUtil.fetchPosts()
        .then(posts => dispatch(receiveAllPosts(posts)))
);

export const fetchPost = id => dispatch => {
    PostAPIUtil.fetchPost(id)
        .then(post => dispatch(receivePost(post)))
};

export const createPost = post => dispatch => (
    PostAPIUtil.createPost(post)
        .then(post => (dispatch(receivePost(post))),
            err => (dispatch(receivePostErrors(err.responseJSON))
            ))
);

export const updatePost = post => dispatch => (
    PostAPIUtil.updatePost(post)
        .then(post => (dispatch(receivePost(post))), 
            err => (dispatch(receivePostErrors(err.responseJSON))
        ))
);

export const deletePost = id => dispatch => (
    PostAPIUtil.deletePost(id)
        .then(post => dispatch(removePost(post.id)))
);


