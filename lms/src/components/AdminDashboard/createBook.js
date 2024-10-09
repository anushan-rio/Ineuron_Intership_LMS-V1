import React, { useState,useEffect } from "react"
import Base from "../../Common/Base"
import Meun from "../../Common/Meun"
import {getCategory} from "../../Helper/AdminHelper/Categoryhelper"
import {isAutheticated} from "../../Helper/Signuphelper"
import {getBookStatus} from "../../Helper/AdminHelper/Bookstatushelper"
import {getBookCondtion} from "../../Helper/AdminHelper/Bookcondtionhelper"
import {createBook} from "../../Helper/AdminHelper/Bookshelper"
const Books=()=>{

    const [values,setValues]=useState({Title:"",Author:"",Publisher:"",Edition:"",Price:"",Copies:"",Location:""})
    const [BookCategorys ,setBookCategory]=useState([]);
    const [BookStatuss ,setBookStatus]=useState([]);
    const [BookCondtionss ,setBookCondtion]=useState([]);
    const [Message ,setMessage]=useState("");
    const [sucess,setsucess]=useState("");

    const {Title,Author,Publisher,Edition,Price,Copies,Location}=values;
    const [BookCategory, setBookCategorys] = useState('');
    const [BookStatus, setBookStatuss] = useState('');
    const [BookCondtion, setBookCondtions] = useState('');
    const { user, token } = isAutheticated();


    //UseEffect
    useEffect(()=>{
        preload();
    },[])


    //SucessMessage
    


    //Preload
    const preload=()=>{
        getBookStatus(user._id, token).then(data => {
        if (data.erro) {
            console.log(data);
        } else {
            setBookStatus(data);
        }
        });
        getCategory(user._id, token).then(data => {
        if (data.erro) {
            console.log(data);
        } else {
            setBookCategory(data);
        }
        });
        getBookCondtion(user._id, token).then(data => {
            if (data.erro) {
                console.log(data);
                
            } else {
                setBookCondtion(data);
            }
            });
    }
    


    //SaveMethod
    const onSubmit = event => {
        event.preventDefault();
        setBookCategory(BookCategorys);
        setValues({ ...values});
        createBook(user._id, token,{Title,Author,Publisher,Edition,Price,Copies,Location,BookCategory,BookStatus,BookCondtion})
        
        .then(data=>{
                if(data){
                    alert(`Book Code ${data.Title} is ${data.BookCode}`)
                }
            })
            
    }
    

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
        setBookCategorys(event.target.value);
    };

    const handleChangebookstatus = name => event => {
        setBookStatuss(event.target.value);
        
    };
//handleChangeBookCondtions
const handleChangeBookCondtions = name => event => {
    setBookCondtions(event.target.value);
    
};
    const booksform=()=>{
    return(
        <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                        <label className="text-light">Title</label>
                        <input
                            className="form-control"
                        onChange={handleChange("Title")}
                            type="text"
                            value={Title}
                        />
                        </div>
                        <div className="form-group">
                        <label className="text-light">Author</label>
                        <input
                            className="form-control"
                        onChange={handleChange("Author")}
                            type="text"
                        value={Author}
                        />
                        </div>
                        <div className="form-group">
                        <label className="text-light">Publisher</label>
                        <input
                            className="form-control"
                        onChange={handleChange("Publisher")}
                            type="text"
                        value={Publisher}
                        />
                        </div>
                        <div className="form-group">
                        <label className="text-light">Edition</label>
                        <input
                            className="form-control"
                        onChange={handleChange("Edition")}
                            type="text"
                        value={Edition}
                        />
                        </div>
                        <div className="form-group">
                        <label className="text-light">Copies</label>
                        <input
                            className="form-control"
                        onChange={handleChange("Copies")}
                            type="text"
                        value={Copies}
                        />
                        </div>
                        <div className="form-group">
                        <label className="text-light">Price</label>
                        <input
                            className="form-control"
                        onChange={handleChange("Price")}
                            type="text"
                        value={Price}
                        />
                        </div>
                        <div className="form-group">
                        <label className="text-light">Location</label>
                        <input
                            className="form-control"
                        onChange={handleChange("Location")}
                            type="text"
                        value={Location}
                        />
                        </div>
                        <div className="form-group">
                        <label className="text-light">Category</label>
                                <select value={BookCategory} onChange={handleChange("Category")} className="form-control" placeholder="Category"  >
                                    <option>Select</option>
                                    {
                                        BookCategorys.map((cate, index) => (
                                        <option key={index} value={cate._id}>
                                            {cate.Name}
                                        </option>
                                        ))}
                                    </select>
                        </div>
                        <div className="form-group">
                        <label className="text-light">BooksStatus</label>
                                <select value={BookStatus} onChange={handleChangebookstatus("BookStatus")} className="form-control" placeholder="BooksStatus"  >
                                    <option>Select</option>
                                    {
                                        BookStatuss.map((status, index) => (
                                        <option key={index} value={status._id}>
                                            {status.BooksStatus}
                                        </option>
                                        ))}
                                    </select>
                        </div>
                        <div className="form-group">
                        <label className="text-light">BookCondtion</label>
                                <select value={BookCondtion} onChange={handleChangeBookCondtions("BookCondtions")} className="form-control" placeholder="BookCondtions"  >
                                    <option>Select</option>
                                    {
                                        BookCondtionss.map((bookstate, index) => (
                                        <option key={index} value={bookstate._id}>
                                            {bookstate.BookState}
                                        </option>
                                        ))}
                                    </select>
                        </div>
                        <button onClick={onSubmit} id="buttonstyle" className="btn btn-success btn-block form-control">
                                Submit
                        </button>
                    </form>
                </div>
        </div>
    
    )
}

    return(
        <Base title="Books" description="Create Books Here">
            <Meun></Meun>
            
            {booksform()}
        </Base>
    )
}

export default Books;