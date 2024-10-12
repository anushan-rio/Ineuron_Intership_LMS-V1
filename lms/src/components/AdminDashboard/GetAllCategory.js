import React, { useState,useEffect } from 'react';
import "../../css/GetAll.css"
import { getCategory ,deleteProduct} from "../../Helper/AdminHelper/Categoryhelper"
import {isAutheticated} from "../../Helper/Signuphelper"
import Base from "../../Common/Base"
import Meun from "../../Common/Meun"
const GetAllCategory = () => {

const [Category, setCategory] = useState([]);
const { user, token } = isAutheticated();

useEffect(() => {
    preload();
}, []);


function showPopup(message) {
    alert(message);
    
}

//PreLoad Function
const preload = () => {
    getCategory(user._id, token).then(data => {
    if (data.Message) {
        showPopup(data.Message);
    } else {
        console.log("inside else")
        setCategory(data);
    }
    });
};

const deleteThisCategory = categoryId => {
    deleteProduct(categoryId, user._id, token).then(data => {
    if (data.error) {
        console.log(data.error);
        
    } else {
        preload();
    }
    });
};



//Table Creation
return(
    <Base title="Category" description="Welcome  Category Page">
        <Meun></Meun>
    <table>
        <thead>
        <tr>
            
            <th style={{color:'Black'}}>Name</th>
            <th style={{color:'Black'}}>Actions</th>
        </tr>
        </thead>
        <tbody>
        {Category.map((category) => (
            
            <tr key={category._id}>
            <td>{category.Name}</td>
            

            
            <td>
                
                <button onClick={() => {deleteThisCategory(category._id);}} className="btn btn-danger">Delete</button>
            </td>
            </tr>
        ))}
        
        </tbody>
    </table>
    
</Base>
)

};

export default GetAllCategory;
