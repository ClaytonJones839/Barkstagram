export const fetchPosts = () => (
    $.ajax({
        method: 'GET',
        url: 'api/posts'
    })
);

export const fetchPost = id => (
    $.ajax({
        method: 'GET',
        url: `api/posts/${id}`
    })
);

export const createPost = post => (
    $.ajax({
        url: 'api/posts',
        method: 'POST',
        data: { post }
    })
);

export const updatePost = post => (
    $.ajax({
        method: 'PATCH',
        url: `api/posts/${post.id}`,
        data: { post }
    })
);

export const deleteImage = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/posts/${id}`,
    })
);