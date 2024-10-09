import React from "react"
import Meun from "../../Common/Meun"
import Base from "../../Common/Base"
import Footer  from "../../Common/Footer";
import { Link ,useNavigate} from "react-router-dom";
import {isAutheticated} from "../../Helper/Signuphelper"
const AdminBoardHome=()=>{
    const {user:{Email,Role}}=isAutheticated();
    
    if(Role=="1"){
        var Roleassign="Admin"
    }
    else{
        Roleassign="user"
    }
    const adminLeftSide = () => {
        return (
        <div className="card">
            <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
            <ul className="list-group">
            <li className="list-group-item">
                <Link to="/admin/create/category" className="nav-link text-success">
                Create Categories
                </Link>
            </li>
            <li className="list-group-item">
                <Link to="/admin/create/bookcondtion" className="nav-link text-success">
                Create Book Condtion
                </Link>
            </li>
            <li className="list-group-item">
                <Link to="/admin/getall/category" className="nav-link text-success">
                Mange category
                </Link>
            </li>
            <li className="list-group-item">
                <Link to="/admin/mange/bookcondtion" className="nav-link text-success">
                Manage Book Condtion
                </Link>
            </li>
            <li className="list-group-item">
                <Link to="/admin/create/bookstatus" className="nav-link text-success">
                Create Book Status
                </Link>
            </li>
            <li className="list-group-item">
                <Link to="/admin/mange/bookstatus" className="nav-link text-success">
                Mange Book Status
                </Link>
            </li>
            </ul>
        </div>
        );
    };    
    
    const adminRightSide = () => {
        return (
        <div className="card mb-4">
            <h4 className="card-header">Admin Information</h4>
            <ul className="list-group">
            <li className="list-group-item">
                <span className="badge badge-success mr-2 text-primary">Email:</span> {Email}
            </li>
            <li className="list-group-item">
                <span className="badge badge-success mr-2 text-primary">Role:</span> {Roleassign}
            </li>
            <li className="list-group-item">
                <span className="badge badge-danger">Admin Area</span>
            </li>
            </ul>
        </div>
        );
    };
    
    return(
        <Base title="AdminDash Board" description="Welcome Admin">
            <Meun></Meun>
            <div className="row" style={{padding:'30px'}}>
            <div className="col-3">{adminLeftSide()}</div>
            <div className="col-9">{adminRightSide()}</div>
            </div>
            <Footer></Footer>
        </Base>
        
    )
}

export default AdminBoardHome;