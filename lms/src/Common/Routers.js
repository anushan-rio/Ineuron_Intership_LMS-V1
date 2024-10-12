import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sigin from "../components/Sigin"
import AdminBoardHome from "../components/AdminDashboard/AdminBoardHome"
import CreateCategory from "../components/AdminDashboard/CreateCategory"
import CreateBookCondtion from "../components/AdminDashboard/CreateBookCondtion"
import GetAllCategory from "../components/AdminDashboard/GetAllCategory"
import GetallBookcondtion from "../components/AdminDashboard/GetallBookcondtion"
import CreateBookStatus from "../components/AdminDashboard/CreateBookStatus"
import GetAllBookStatus from "../components/AdminDashboard/GetAllBookStatus"
import Books from "../components/AdminDashboard/createBook"
import AllBooks from "../components/AdminDashboard/GetAllBooks"
import IssueBook from "../components/AdminDashboard/IssueBook"
import User from "../components/User"
const Routers=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Sigin/>}/>
                <Route exact path="/Admindashboard" element={<AdminBoardHome/>}/>
                <Route exact path="/admin/create/category" element={<CreateCategory/>}/>
                <Route exact path="/admin/getall/category" element={<GetAllCategory/>}/>
                <Route exact path="/admin/create/bookcondtion" element={<CreateBookCondtion/>}/>
                <Route exact path="/admin/mange/bookcondtion" element={<GetallBookcondtion/>}/>
                <Route exact path="/admin/create/bookstatus" element={<CreateBookStatus/>}/>
                <Route exact path="/admin/mange/bookstatus" element={<GetAllBookStatus/>}/>
                <Route exact path="/admin/create/Books" element={<Books/>}/>
                <Route exact path="/admin/all/Books" element={<AllBooks/>}/>
                <Route exact path="/admin/IssueBoooks" element={<IssueBook/>}/>
                <Route exact path="/user" element={<User/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Routers;