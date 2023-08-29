import React from 'react';

import bc1j from './books/bc1.json';
import bc2j from './books/bc2.json';
import bc3j from './books/bc3.json';

import cvr1 from './books/cover1.png';
import cvr2 from './books/cover2.png';
import cvr3 from './books/cover3.png';


function Library() {
  const books = [
    {
      cover: cvr1,
      info: bc1j,
      id: 1,
    },
    {
      cover: cvr2,
      info: bc2j,
      id: 2,
    },
    {
      cover: cvr3,
      info: bc3j,
      id: 3,
    },
  ];

  const addTodo = async ({ cover, info }) => {
    try {
      const todoData = { ...info, cover }; // Use 'info' directly for book data
      await fetch('https://bookstor-115bc-default-rtdb.asia-southeast1.firebasedatabase.app/books/.json', {
        method: 'POST',
        body: JSON.stringify(todoData),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>TRY TO ADD THESE</h1>
      <div className='book-grid'>
        {books.map(({ cover, info, id }) => (
          <div key={id} className='book-item'>
            <img src={cover} alt='Cover' />
            <BookInfo bookInfo={info} />
            <button onClick={() => addTodo({ cover, info })}>Add to list</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function BookInfo({ bookInfo }) {
  return (
    <div className='book-container'>
      <h2 className='book-title'>{bookInfo.title}</h2>
      <p className='book-info'>Author: {bookInfo.author}</p>
      <p className='book-info'>Price: {bookInfo.price}€</p>
      <p className='book-info'>Year: {bookInfo.year}</p>
      <p className='book-info'>ISBN: {bookInfo.isbn}</p>
    </div>
  );
}

export default Library;
