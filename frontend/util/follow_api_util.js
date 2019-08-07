export const createFollow = follow => {
    return $.ajax({
        method: "POST",
        url: `api/followings`,
        data: { follow }
    });
};

export const deleteFollow = id => {
    return $.ajax({
        method: "DELETE",
        url: `api/followings/${id}`,
    });
};

export const fetchFollow = id => {
    return $.ajax({
        method: "GET",
        url: `api/followings/${id}`
    });
};

export const fetchUserFollows = user_id => {
    return $.ajax({
        method: "GET",
        url: `api/users/${user_id}/followings`
    });
};