import React from "react";
import { Link ,useNavigate} from "react-router-dom";

const Meun=()=>{
    return(
        <div>
            <ul className="nav nav-tabs bg-dark">
                <li className="nav-item">
                    <Link   className="nav-link"  to="/"></Link>
                </li>
                <li className="nav-item">
                    <Link   className="nav-link" style={{ color: 'white' }} to="/Admindashboard">AdminDashboard</Link>
                </li>
                <li className="nav-item">
                    <Link   className="nav-link" style={{ color: 'white' }}  to="/user">Users</Link>
                </li>
                <li className="nav-item">
                    <Link   className="nav-link" style={{ color: 'white' }} to="/admin/create/Books">Books</Link>
                </li>
                <li className="nav-item">
                    <Link   className="nav-link" style={{ color: 'white' }} to="/admin/all/Books">MangeBooks</Link>
                </li>
                <li className="nav-item">
                    <Link   className="nav-link" style={{ color: 'white' }} to="/signout">signout</Link>
                </li>
            </ul>
        </div>
    )
}

export default Meun;