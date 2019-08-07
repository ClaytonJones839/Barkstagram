export const fetchPosts = () => (
    $.ajax({
        method: 'GET',
        url: 'api/posts'
    })
);

export const fetchProfilePosts = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/profile/posts/${id}`
    })
);

export const fetchPost = id => (
    $.ajax({
        method: 'GET',
        url: `api/posts/${id}`
    })
);

export const createPost = formData => (
    $.ajax({
        url: 'api/posts',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
    })
);

export const updatePost = post => (
    $.ajax({
        method: 'PATCH',
        url: `api/posts/${post.id}`,
        data: { post }
    })
);

export const deletePost = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/posts/${id}`,
    })
);