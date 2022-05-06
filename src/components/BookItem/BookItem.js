import React from 'react';

const BookItem = props => {

    const {title, author} = props.book
    return (
        <div>
            <li>Title: {title} Author: {author}</li>
        </div>
    );
};

export default BookItem;