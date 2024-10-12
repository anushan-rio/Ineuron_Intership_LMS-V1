import React, { useState ,useEffect} from 'react';
import Base from "../../Common/Base"
import Meun from "../../Common/Meun"
import {isAutheticated} from "../../Helper/Signuphelper"
import {getBooks,updateBooks,deletebooks} from "../../Helper/AdminHelper/Bookshelper"







const AllBooks = () => {
  const [items, setItems] = useState([]);
  const [Books, setBooks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editAuthor, setEditAuthor] = useState('');
  const [editcopies, setEditcopies] = useState('');
  const { user, token } = isAutheticated();
  const {_id}=Books;

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const startEdit = (item) => {
    console.log("--item-",item._id)
    setEditId(item._id);
    setEditName(item.Title);
    setEditcopies(item.Copies);
    setEditAuthor(item.Author);
  };





  const updateItem = () => {
    console.log("editId----",editId)
    setEditId(null);
    var Title=editName
    var Copies= editcopies
    var Author=editAuthor
    
    
    updateBooks({Title,Copies,Author},editId,user._id,token)
    .then(data=>{
      setEditName(data);
      preload();
    })
  };


  



//UseEffect
useEffect(() => {
    preload();
}, []);


const preload = () => {
    getBooks(user._id, token).then(data => {
    if (data.erro) {
        console.log(data);
    } else {
      console.log(data)
        setBooks(data)
        console.log("data-----",data)
    }
    });
};


const deletethisItem = Booksid => {
  
  deletebooks(Booksid, user._id, token)
  .then(data=>{
    console.log("Inside if",typeof(data.deletedCount))
    if(data.deletedCount==1){
      console.log("preload")
      preload();
    }
  })
  //preload();
};




  return (
    <Base title="Manage Books" description="Page For Manage Books">
      <Meun></Meun>
    <div>
      <h1>Item List</h1>
      
      <table>
        <thead>
          <tr>
          
            <th style={{color:'Black'}}>Name</th>
            <th style={{color:'Black'}}>Author</th>
            <th style={{color:'Black'}}>Copies</th>
            <th style={{color:'Black'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Books.map(item => (
            <tr key={item.id}>
              <td>
                {editId === item._id ? (
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                ) : (
                  item.Title
                )}
              </td>
              <td>
                {editId === item._id ? (
                  <input
                    type="text"
                    value={editAuthor}
                    onChange={(e) => setEditAuthor(e.target.value)}
                  />
                ) : (
                  item.Author
                )}
              </td>
              <td>
                {editId === item._id ? (
                  <input
                    type="text"
                    value={editcopies}
                    onChange={(e) => setEditcopies(e.target.value)}
                  />
                ) : (
                  item.Copies
                )}
              </td>
              <td>
                {editId === item._id ? (
                  <button onClick={updateItem} class="btn btn-success">Update</button>
                ) : (
                  <>
                    <button onClick={() => startEdit(item)} class="btn btn-primary">Edit</button>
                    <button onClick={() => deletethisItem(item._id)} className="btn btn-danger">Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Base>
  );
};

export default AllBooks