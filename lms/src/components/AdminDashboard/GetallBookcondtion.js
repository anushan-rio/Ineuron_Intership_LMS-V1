import React,{useState,useEffect} from "react"
import Base from "../../Common/Base"
import Meun from "../../Common/Meun"
import {getBookCondtion,deleteBookcondtion} from "../../Helper/AdminHelper/Bookcondtionhelper"
import {isAutheticated} from "../../Helper/Signuphelper"
const GetallBookcondtion=()=>{

    const [Bookcondtion, setBookcondtion] = useState([]);

    const { user, token } = isAutheticated();

    useEffect(() => {
        preload();
    }, []);
    

    const preload = () => {
        getBookCondtion(user._id, token).then(data => {

        if (data.Message) {
            console.log(data.Message);
        } else {
        
            setBookcondtion(data);
        }
        });
    };

    //Delete 
    const deleteThisBookCondtion = bookcondId => {
        deleteBookcondtion(bookcondId, user._id, token).then(data => {
            if (data.error) {
            alert("NO Data AVAIABLE")
            
        } else {
            preload();
        }
        });
    };

    return(
        <Base title="Book Condtion" description="Welcome  BookCondtion  Page">
            <Meun></Meun>
            <table>
        <thead>
        <tr>
            
            <th style={{color:'Black'}}>Name</th>
            <th style={{color:'Black'}}>Actions</th>
        </tr>
        </thead>
        <tbody>
        {Bookcondtion.map((bookcond) => (
            
            <tr key={bookcond._id}>
            <td>{bookcond.BookState}</td>
            

            
            <td>
                
                <button onClick={() => {deleteThisBookCondtion(bookcond._id);}}  className="btn btn-danger">Delete</button>
            </td>
            </tr>
        ))}
        
        </tbody>
    </table>
        </Base>
    )
}

export default GetallBookcondtion