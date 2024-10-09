import React,{useState} from "react"
import Base from "../Common/Base"
import {signup} from "../Helper/Signuphelper"
import "../index.css"

const Signup=()=>{


    const [values, setValues] = useState({
        Email: "",
        password: "",
        Address: "",
        PhoneNumber: "",
        Name:"",
        LibraryMangement:"",
        error:"",
        success: false
    });

    const { Email, password, Address, PhoneNumber,Name,LibraryMangement,error, success } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    //SuccessMessage
    const successMessage = () => {
        console.log("TSUCESS-----"+success)
        return (
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
        <div
                className="alert alert-success"
                style={{ display: success ? "" : "none" }}
            >
                New account was created successfully. Please
                
            </div>
        </div>
        </div>
        );
    };

    //ErrorMessage
    const errorMessage = () => {
        console.log("TERROR----"+error)
        return (
            <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <div
                className="alert alert-danger"
                style={{ display: error ? "" : "none" }}
                >
                Please Enter All  Feilds
                </div>
            </div>
            </div>
        );
        };

    //On SubmitEvent
    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
    signup({ Email, password, Address,PhoneNumber,Name,LibraryMangement })
    .then(data => {
        if(Email=="" || password=="" || Address=="" || PhoneNumber=="" || Name=="" || LibraryMangement=="" ){
            setValues({
                ...values,
                Email: "",
                password: "",
                Address: "",
                PhoneNumber: "",
                Name:"",
                LibraryMangement:"",
                error:true,
                success: false
            });
            
            errorMessage();
        }
        else{
        console.log("Inside Else")
            setValues({
            ...values,
            Email: "",
            password: "",
            Address: "",
            PhoneNumber: "",
            Name:"",
            LibraryMangement:"",
            error:"",
            success: true
        });
    }
        
    })
    .catch(console.log("Error in signup"));
    }


    //SigupForm
    const signUpForm = () => {
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
                <label className="text-light">password</label>
                <input
                    className="form-control"
                    onChange={handleChange("password")}
                    type="password"
                    value={password}
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
                Submit
                </button>
            </form>
            </div>
        </div>
        );
    };


    return(
        <Base title="Sign Up" description="Page For User To SignUp">
            {successMessage()}
            {errorMessage()}
            {signUpForm()}
            
            
        </Base>
    )
}

export default Signup;