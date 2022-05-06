import BooksList from '../BooksList/BooksList';
import Navigation from '../Navigation/Navigation';
import BookForm from '../BookForm/BookForm';

const BooksContainer = () => (
  <div>
    <Navigation />
    <BooksList />
    <BookForm />
  </div>
);

export default BooksContainer;
