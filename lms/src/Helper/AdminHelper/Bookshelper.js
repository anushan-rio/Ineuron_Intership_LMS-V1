import {API} from "../../Common/Backend"


export const createBook = (userId, token, books) => {
    return fetch(`${API}/createBooks/${userId}`, {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(books)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log("err------"+err));
};

export const getBooks = (userId, token ) => {
    return fetch(`${API}/getAllBooks/${userId}`, {
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

export const updateBooks = (booksdata,editId,userId,token) => {
    console.log("booksdata-Helper--",booksdata)
    console.log("editId-Helper--",editId)
    
    return fetch(`${API}/updateBooks/${userId}/${editId}`, {
    method: "PUT",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(booksdata)
    })
    .then(response => {
        console.log("then")
        return response.json();
    })
    .catch(err => console.log("err------"+err));
};