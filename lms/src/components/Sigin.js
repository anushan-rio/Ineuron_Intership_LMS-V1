import React,{useState} from "react"
import { useNavigate } from 'react-router-dom';
import Base from "../Common/Base"
import Footer from "../Common/Footer"
import {authenticate,signin,isAutheticated} from "../Helper/Signuphelper"
import "../index.css"

const Sigin=()=>{
    
    const Navigate=useNavigate();
    const [Error,setError]=useState();
    const [values,setValues]=useState(
        {Email: "",
        password: "",
        Error: "",
        loading:false,
        didRedirect: false});

    const {Email,password,loading,didRedirect}=values;
    const {user}=isAutheticated();

    const handleChange = name => event => {
        setValues({ ...values, Error: false, [name]: event.target.value });
    };

    const errorMessage = () => {
        console.log("TERROR----"+Error)
        return (
            <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <div
                className="alert alert-danger"
                style={{ display: Error ? "" : "none" }}
                >
                    {Error}
                </div>
            </div>
            </div>
        );
        };


    //On SUBMITEVENT
    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, Error: false, loading: true });
        signin({ Email, password })
        .then((data) => {
            console.log("data---",data)
            if (data.Error) {
                console.log("T7---",data.Error)
                setError(data.Error)
            setValues({ ...values, Error: data.Error, loading: false });
            } else {
            authenticate(data, () => {
                setValues({
                ...values,
                didRedirect: true
                });
            });
            }
        })
        .catch(console.log("signin request failed"));
    }


    const performRedirect = () => {
        if (didRedirect) {
        if (user && user.Role === "1") {
            Navigate('/Admindashboard');
            
        } else {
            return <p>Redirect to user dahboard</p>;
        }
        }
        if (isAutheticated()) {
           // Navigate('/Admindashboard');
        }
    };

    const Signinform=()=>{
        return (
            <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <form>
                
                <div className="form-group">
                    <label className="text-light">Email</label>
                    <input
                    className="form-control"
                    onChange={handleChange("Email")}
                    type="Email"
                    value={Email}
                    />
                </div>
    
                <div className="form-group">
                    <label className="text-light">Password</label>
                    <input
                    onChange={handleChange("password")}
                    className="form-control"
                    type="password"
                    value={password}
                    />
                </div>
                <div></div>
                <button onClick={onSubmit}  id="buttonstyle" className="btn btn-success btn-block form-control">
                    LogIn
                </button>
                </form>
            </div>
            </div>
        );
    }
    
    return(
        <Base title="Login" description="Page For User To Login">
    
        {errorMessage()} 
        {Signinform()}

            {performRedirect()  }
            <Footer></Footer>
        </Base>
    )
}

export default Sigin;