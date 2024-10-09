import {API} from "../../Common/Backend"



export const createBookStatus = (userId, token, BooksStatus) => {
    return fetch(`${API}/bookstatus/create/${userId}`, {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(BooksStatus)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log("err------"+err));
};


export const getBookStatus = (userId, token ) => {
    return fetch(`${API}/bookstatus/getAll/${userId}`, {
    method: "GET",
    headers: {
        Authorization: `Bearer ${token}`
    },
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const deleteBookStatus = (bookcondId, userId, token) => {
    return fetch(`${API}/bookstatus/delete/${userId}/${bookcondId}`, {
    method: "DELETE",
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
    }
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};