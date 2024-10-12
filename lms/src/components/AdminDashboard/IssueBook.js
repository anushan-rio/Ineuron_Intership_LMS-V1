import React, { useState } from 'react'
import Base from "../../Common/Base"
import Meun from "../../Common/Meun"
import DatePicker from "react-datepicker";
import {isAutheticated} from "../../Helper/Signuphelper"
import "react-datepicker/dist/react-datepicker.css";
import "../AdminDashboard/issuebook.css"
import {createIssueBook} from "../../Helper/AdminHelper/IssueBookhelper"
const IssueBook=()=>{



const IssueBookForm = () => {
    const [IssueTOEmail, setIssueTOEmail] = useState('');
    const [BooksCode, setBooksCode] = useState('');
    const [IssueDate, setIssueDate] = useState(new Date());
    const [ReturnDate, setReturnDate] = useState(new Date());
    const [Copies, setCopies] = useState('');
    const { user, token } = isAutheticated();
    const handleSubmit = (e) => {
        console.log("e----",e)
        e.preventDefault();
        // Handle form submission logic here
        console.log({ IssueTOEmail, BooksCode, IssueDate, ReturnDate, Copies });
        createIssueBook(user._id, token,{ IssueTOEmail, BooksCode, IssueDate, ReturnDate, Copies })
        .then(data=>{
            console.log("data----",data)
            alert("Data Saved SuccessFully")
            setIssueTOEmail("")
            setBooksCode("")
            setIssueDate("")
            setReturnDate("")
            setCopies(""    )
        })
    };

    return (
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="text-light">Issue TO Email</label>
                        <input
                            className="form-control"
                            type="email"
                            value={IssueTOEmail}
                            onChange={(e) => setIssueTOEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="text-light">Books Code</label>
                        <input
                            className="form-control"
                            type="text"
                            value={BooksCode}
                            onChange={(e) => setBooksCode(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="text-light">Issue Date</label>
                        <DatePicker
                            selected={IssueDate}
                            onChange={date => setIssueDate(date)}
                            dateFormat="yyyy/MM/dd"
                        />
                    </div>

                    <div className="form-group">
                        <label className="text-light">Return Date</label>
                        <DatePicker
                            selected={ReturnDate}
                            onChange={date => setReturnDate(date)}
                            dateFormat="yyyy/MM/dd"
                        />
                    </div>

                    <div className="form-group">
                        <label className="text-light">Copies</label>
                        <input
                            className="form-control"
                            type="number"
                            value={Copies}
                            onChange={(e) => setCopies(e.target.value)}
                            required
                        />
                    </div>

                    <button id="buttonstyle" className="btn btn-success btn-block">
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};


    return(
        <Base title="Category" description="Welcome  Category Page">
            <Meun></Meun>
            {IssueBookForm()}
        </Base>
    )
}
export default IssueBook;