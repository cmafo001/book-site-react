import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddTodo from './AddTodo';
import React from 'react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

function MyList() {
  const [todos, setTodos] = useState([]);

  const columnDefs = [
    { field: 'title', sortable: true, filter: true},
    { field: 'author', sortable: true, filter: true},
    { field: 'year', sortable: true, filter: true},
    { field: 'isbn', sortable: true, filter: true},
    { field: 'price', sortable: true, filter: true},
    { 
      headerName: '',
      field: 'id',
      width: 90,
      cellRenderer: params => 
      <IconButton onClick={() => deleteTodo(params.value)} size="small" color="error">
        <DeleteIcon />
      </IconButton> 
    }
  ]

  useEffect(() => {
    fetchItems();
  }, [])

  const fetchItems = () => {
    fetch('https://bookstor-115bc-default-rtdb.asia-southeast1.firebasedatabase.app/books/.json')
    .then(response => response.json())
    .then(data => addKeys(data))
    .catch(err => console.error(err))
  }

  // Add keys to the todo objects
  const addKeys = (data) => {
    const keys = Object.keys(data);
    const valueKeys = Object.values(data).map((item, index) => 
    Object.defineProperty(item, 'id', {value: keys[index]}));
    setTodos(valueKeys);
  }

  const addTodo = (newTodo) => {
    const { cover, info } = newTodo; 
    
    fetch('https://bookstor-115bc-default-rtdb.asia-southeast1.firebasedatabase.app/books/.json', {
      method: 'POST',
      body: JSON.stringify(newTodo)
    })
    .then(response => response.json())
    .then(data => {
      const { name } = data; 
      
      
      fetch(info)
        .then((response) => response.json())
        .then((infoData) => {
          const todoData = { ...infoData, cover }; 
          fetch(`https://bookstor-115bc-default-rtdb.asia-southeast1.firebasedatabase.app/books/${name}.json`, {
            method: 'PATCH', 
            body: JSON.stringify(todoData),
          })
          .then(response => fetchItems())
          .catch(err => console.error(err));
        })
        .catch((err) => console.error(err));
    })
    .catch(err => console.error(err));
  }
  
  


  const deleteTodo = (id) => {
    fetch(`https://bookstor-115bc-default-rtdb.asia-southeast1.firebasedatabase.app/books/${id}.json`,
    {
      method: 'DELETE',
    })
    .then(response => fetchItems())
    .catch(err => console.error(err))
  }

  return (
    <div className='todo-container'>
      <div className='todo-content'>
        <AddTodo addTodo={addTodo} />
        <div className="ag-theme-material todo-grid">
          <AgGridReact 
            rowData={todos}
            columnDefs={columnDefs}
          />
        </div>
      </div>
    </div>
  );
}

  
export default MyList;