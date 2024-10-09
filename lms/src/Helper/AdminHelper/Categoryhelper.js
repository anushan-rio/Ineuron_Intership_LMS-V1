import {API} from "../../Common/Backend"


export const createCategory = (userId, token, category) => {
    return fetch(`${API}/createcategory/${userId}`, {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(category)
    })
    .then(response => {
        console.log("then")
        return response.json();
    })
    .catch(err => console.log("err------"+err));
};

export const getCategory = (userId, token ) => {
    return fetch(`${API}/getAllcategories/${userId}`, {
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


export const deleteProduct = (categoryId, userId, token) => {
    return fetch(`${API}/deleteCategory/${categoryId}/${userId}`, {
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