import React, { useState } from 'react';
import BooksList from '../BooksList/BooksList';
import Navigation from '../Navigation/Navigation';
import BookForm from '../BookForm/BookForm';

const BooksContainer = () => {
    return (
        <div>
            <Navigation />
            <BooksList />
            <BookForm />
        </div>
    );
};

export default BooksContainer;