import React from 'react';
import BookItem from '../BookItem/BookItem';

const BooksList = props => {
    const booksInitial = [{
        title: 'Harry Potter',
        author: 'J. K. Rowling'
        },
       ]
    return (
        <div>
            <ul>
                {booksInitial.map(book => (<BookItem book={book} /> ))}
            </ul>
        </div>
    );
};

export default BooksList;