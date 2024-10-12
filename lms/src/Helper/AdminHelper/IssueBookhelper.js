import {API} from "../../Common/Backend"

export const createIssueBook = (userId, token, IssueBook) => {
    return fetch(`${API}/addIssuebooks/${userId}`, {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(IssueBook)
    })
    .then(response => {
        console.log("then")
        return response.json();
    })
    .catch(err => console.log("err------"+err));
};