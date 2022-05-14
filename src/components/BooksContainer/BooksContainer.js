import BooksList from '../BooksList/BooksList';
import './BooksContainer.css';
import Navigation from '../Navigation/Navigation';

const BooksContainer = () => (
  <div className="main-container">
    <Navigation />
    <BooksList className="books-list" />
  </div>
);

export default BooksContainer;
