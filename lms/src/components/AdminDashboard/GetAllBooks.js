import React, { useState ,useEffect} from 'react';
import Base from "../../Common/Base"
import Meun from "../../Common/Meun"
import {isAutheticated} from "../../Helper/Signuphelper"
import {getBooks,updateBooks} from "../../Helper/AdminHelper/Bookshelper"







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

  return (
    <div>
      <h1>Item List</h1>
      
      <table>
        <thead>
          <tr>
          
            <th>Name</th>
            <th>Author</th>
            <th>Copies</th>
            <th>Actions</th>
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
                  <button onClick={updateItem}>Update</button>
                ) : (
                  <>
                    <button onClick={() => startEdit(item)}>Edit</button>
                    <button onClick={() => deleteItem(item.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBooks