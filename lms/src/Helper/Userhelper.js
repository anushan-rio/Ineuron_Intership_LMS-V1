import {API} from "../Common/Backend"


export const getuser = (userId, token ) => {
    return fetch(`${API}/getUser/${userId}`, {
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


export const updateuser = (userdata,userId,token) => {
    return fetch(`${API}/upadateuser/${userId}`, {
    method: "PUT",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(userdata)
    })
    .then(response => {
        console.log("then")
        return response.json();
    })
    .catch(err => console.log("err------"+err));
};