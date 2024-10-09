import {API} from "../Common/Backend"

export const signup=user=>{
    return fetch(`${API}/signup`,{
        method:"Post",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response=>{   
        return response.json()
    })
    .catch(err=>{
        console.log("Error In Sigup Page")
    })
}

export const signin=user=>{
    return fetch(`${API}/signin`,{
    method:"Post",
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
    },
        body:JSON.stringify(user)
    })
    .then(response=>{
    return response.json()
    })
    .catch(err=>{
        console.log("error---->"+err)
    })

}

export const authenticate = (data, next) => {
    console.log("-----",data)
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data));
        next();
    }
    };

    export const isAutheticated = () => {
        if (typeof window == "undefined") {
        return false;
        }
        if (localStorage.getItem("jwt")) {
            console.log(localStorage.getItem("jwt"))
            return JSON.parse(localStorage.getItem("jwt"));
        } else {
            return false;
        }
    };