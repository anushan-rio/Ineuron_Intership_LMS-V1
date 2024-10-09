import React,{useState} from "react"
import Base from "../../Common/Base"
import Meun from "../../Common/Meun"
import {isAutheticated} from "../../Helper/Signuphelper"
import {createCategory} from "../../Helper/AdminHelper/Categoryhelper"
import Footer from "../../Common/Footer"

const CreateCategory=()=>{
    
    const [Name,setName]=useState("")
    const [error,setError]=useState(false);
    const [success,setSuccess]=useState("");
    const { user, token } = isAutheticated();
    const [Message,setMessage]=useState("")
    //HandleChange 
    const handleChange = event => {
        setError("");
        setName(event.target.value);
    };
    
    
    

    //SuccessMeeage
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

    //CategoryForm
    const myCategoryForm = () => (
        <form>
        <div className="form-group">
            <p className="lead">Enter the category</p>
            <input
            type="text" onChange={handleChange}  className="form-control my-3"  autoFocus required placeholder="For Ex. Novel"/>
            <button  onClick={onSubmit} className="btn btn-outline-info">
            Create Category
            </button>
        </div>
        </form>
    );
    

    //onSubmit
    const onSubmit = event => {
        event.preventDefault();
        if(Name===""){
            console.log("T6 ");
            setError(true);
            setSuccess(false);
            setName("");
            warningMessage();
        }
        else{
        createCategory(user._id, token, { Name }).then(data => {
            console.log("data---",data)
            if (data.error) {
            setError(true);
            } 
            if(data.Message){
                setMessage(data.Message)
            }
            else {
            setError("");
            setSuccess("Data Saved Sucessfully");
            setName("");
            }
        
        });
    }
    }; 



    return(
        
        <Base title="Category" description="Welcome Create Category Page">
            <Meun></Meun>
            {successMessage()}
            {warningMessage()}
            {myCategoryForm()}
            <Footer></Footer>
        </Base>
    )
}
export default CreateCategory