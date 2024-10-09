import React, { useState,useEffect } from "react"
import Base from "../Common/Base"
import Meun from "../Common/Meun"
import {isAutheticated} from "../Helper/Signuphelper"
import {getuser,updateuser} from "../Helper/Userhelper"
const User=()=>{
    const [values,setValues]=useState({});
    const {user,token}=isAutheticated();
    const [success,setsuccess]=useState("");
    const {Email,Address,PhoneNumber,Name,LibraryMangement}= values

    useEffect(() => {
        preload();
    }, []);
    
    //HandleChange
    const handleChange = name => event => {
        setValues({ ...values, Error: false, [name]: event.target.value });
    };


    //PreLoad
    const preload = () => {
        getuser(user._id, token).then(data => {
            console.log("data---",data)
        if (data.Message) {
            console.log(data.Message);
        } else {
        
            setValues(data);
        }
        });
    };


    //successMessage
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

    //ONSUBMIT
    const onSubmit = event => {
        event.preventDefault();
        updateuser({Email,Address,PhoneNumber,Name,LibraryMangement},user._id,token)
        .then(data=>{
            if(data!=undefined || data!="undefined"){
                setsuccess("User Update SuccessFully")
            }
        })
    }

    const userform=()=>{
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                <form>
                    <div className="form-group">
                    <label className="text-light">Email</label>
                    <input
                        className="form-control"
                        onChange={handleChange("Email")}
                        type="text"
                        value={Email}
                    />
                    </div>
                    
                    <div className="form-group">
                    <label className="text-light">Address</label>
                    <input
                        className="form-control"
                        onChange={handleChange("Address")}
                        type="text"
                        value={Address}
                    />
                    </div>
                    <div className="form-group">
                    <label className="text-light">PhoneNumber</label>
                    <input
                        className="form-control"
                        onChange={handleChange("PhoneNumber")}
                        type="Number"
                        value={PhoneNumber}
                    />
                    </div>
                    <div className="form-group">
                    <label className="text-light">Name</label>
                    <input
                        className="form-control"
                        onChange={handleChange("Name")}
                        type="text"
                        value={Name}
                    />
                    </div>
        
                    <div className="form-group">
                    <label className="text-light">LibraryMangement</label>
                    <input
                    onChange={handleChange("LibraryMangement")}
                        className="form-control"
                        type="text"
                        value={LibraryMangement}
                    />
                    </div>
                    
                    <button onClick={onSubmit} id="buttonstyle" className="btn btn-success btn-block form-control">
                    Save
                    </button>
                </form>
                </div>
            </div>
            );
    }




    return(
        <Base title="Users" description="Welcome User">
            <Meun></Meun>
            {successMessage()}
            {userform()}
        </Base>
    )
}
export default User;