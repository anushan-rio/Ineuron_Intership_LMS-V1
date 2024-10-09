import React,{useEffect,useState} from "react"
import Base from "../../Common/Base"
import Meun from "../../Common/Meun"
import {getBookStatus,deleteBookStatus} from "../../Helper/AdminHelper/Bookstatushelper"
import {isAutheticated} from "../../Helper/Signuphelper"

const GetAllBookStatus=()=>{

    const [BookStatus,setBookStatus]=useState([]);
    const [Message,setMessage]=useState("")
    const { user, token } = isAutheticated();
    //UseEffect 
    useEffect(() => {
        preload();
    }, []);

    //PreLoad
    const preload = () => {
        getBookStatus(user._id, token).then(data => {
            console.log("data---",data)
        if (data.erro) {
            console.log(data);
        } else {
            setBookStatus(data);
        }
        });
    };
    
    //Delete
    const deleteThisBookStatus = bookstatedId => {
        deleteBookStatus(bookstatedId, user._id, token).then(data => {
            if (data.Message) {
                setMessage(data.Message)
            
        } else {
            preload();
        }
        });
    };
    
    

    return(
        <Base title="Book Status" description="Welcome  BookStatus  Page">
            <Meun></Meun>
            <table>
        <thead>
        <tr>
            
            <th style={{color:'Black'}}>Name</th>
            <th style={{color:'Black'}}>Actions</th>
        </tr>
        </thead>
        <tbody>
        {BookStatus.map((bookstate) => (
            
            <tr key={bookstate._id}>
            <td>{bookstate.BooksStatus}</td>
            

            
            <td>
                
                <button onClick={() => {deleteThisBookStatus(bookstate._id);}}   className="btn btn-danger">Delete</button>
            </td>
            </tr>
        ))}
        
        </tbody>
    </table>
        </Base>
    )

}

export default GetAllBookStatus;