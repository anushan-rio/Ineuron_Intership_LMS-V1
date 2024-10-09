import {API} from "../../Common/Backend"


export const BookConHelper = (userId, token, bookstate) => {
    return fetch(`${API}/createbookcondtion/${userId}`, {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(bookstate)
    })
    .then(response => {
        console.log("then")
        return response.json();
    })
    .catch(err => console.log("err------"+err));
};


export const getBookCondtion = (userId, token ) => {
    return fetch(`${API}/getallbookcondtion/${userId}`, {
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



export const deleteBookcondtion = (bookcondId, userId, token) => {
    return fetch(`${API}/deletebookcondtion/${userId}/${bookcondId}`, {
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