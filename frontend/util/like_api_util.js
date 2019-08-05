export const fetchLike = id => {
    return $.ajax({
        method: "GET",
        url: `api/likes/${id}`
    });
};

export const createLike = post_id => {
    return $.ajax({
        method: "POST",
        url: `api/likes`
    });
};

export const deleteLike = post_id => (
    $.ajax({
        method: 'DELETE',
        url: `/api/likes/${post_id}`
    }));