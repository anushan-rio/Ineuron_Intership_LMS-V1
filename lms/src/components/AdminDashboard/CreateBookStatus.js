import React, { useState } from "react"
import Base from "../../Common/Base"
import Meun from "../../Common/Meun"
import {isAutheticated}  from "../../Helper/Signuphelper"
import {createBookStatus} from "../../Helper/AdminHelper/Bookstatushelper"

const CreateBookStatus=()=>{
    
    const[BooksStatus,setBooksStatus]=useState("");
    const [Message,setMessage]=useState("");
    const[Error,setError]=useState(""); 
    const[success,setSuccess]=useState("")
    const {user, token }=isAutheticated();


    //HandleChange
    const handleChange = event => {
        setBooksStatus(event.target.value);
    };
    //SuccesMessage
    const successMessage = () => {
        return (
            <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <div
                className="alert alert-success"
                style={{ display: success ? "" : "none" }}
                >
                    {success}
                </div>
            </div>
            </div>
        );
        };

        //Warning MESSAGE
        const warningMessage = () => {
            return (
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
            <div
                className="alert alert-danger"
                style={{ display: Message ? "" : "none" }}
            >
                {Message}
            </div>
            </div>
        </div>
        );
    };

    //ONSUBMIT
    const onSubmit = event => {
        event.preventDefault();
        createBookStatus(user._id, token, { BooksStatus }).then(data => {
            console.log("data--",data)
            if (data.Message) {
            setMessage(data.Message)
            } else {
            setError("");
            setSuccess("Date Saved Sucessfully");
            
            }
        
        });
    }
    
    
    const myBookStatusForm = () => (
        <form>
        <div className="form-group">
            <p className="lead">Enter the BookStatus</p>
            <input
            type="text"   onChange={handleChange}  className="form-control my-3"  autoFocus required placeholder="For Ex. CheckIn"/>
            <button onClick={onSubmit}  className="btn btn-outline-info">
            Create Book Condtion
            </button>
        </div>
        </form>
    );




    return(
        <Base title="BookStatus" description="Page For User To BookStatus">
            <Meun></Meun>
            {successMessage()}
            {warningMessage()}
            {myBookStatusForm()}
        </Base>
    )
}

export default CreateBookStatus