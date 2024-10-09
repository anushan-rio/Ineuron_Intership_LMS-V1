import React,{useState} from "react"
import Base from "../../Common/Base"
import {isAutheticated} from "../../Helper/Signuphelper"
import {BookConHelper} from "../../Helper/AdminHelper/Bookcondtionhelper"
import Meun from "../../Common/Meun"
import Footer from "../../Common/Footer"
const CreateBookCondtion=()=>{

    const [BookState,setBookState]=useState("");
    const [error,setError]=useState(false);
    const [success,setSuccess]=useState(false);
    const {user,token}=isAutheticated();
    const [Message,setMessage]=useState("");
    console.log("Message----",Message)
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
    

    //Warring Message
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
        

    const handleChange = event => {
        setBookState(event.target.value);
    };

        //Submit
    const onSubmit = event => {
        event.preventDefault();
        BookConHelper(user._id, token, { BookState }).then(data => {
            console.log("data---data---",data)
            if (data.Message) {
                
            setMessage(data.Message)
            } else {
            setError("");
            setSuccess("Date Saved Sucessfully");
            
            }
        
        });
    }

    const myBookcondtionForm = () => (
        <form>
        <div className="form-group">
            <p className="lead">Enter the BookCondtion</p>
            <input
            type="text"  onChange={handleChange}    className="form-control my-3"  autoFocus required placeholder="For Ex. Good"/>
            <button  onClick={onSubmit} className="btn btn-outline-info">
            Create Book Condtion
            </button>
        </div>
        </form>
    );

    return(
        <Base title="Book Condtion" description="Welcome Create Book Condtion">
            <Meun></Meun>
            {warningMessage()}
            {successMessage()}
        {myBookcondtionForm()}
        <Footer></Footer>
        </Base>
    )
}

export default CreateBookCondtion