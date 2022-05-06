import './App.css';
import { Routes, Route } from 'react-router-dom';
import Categories from './components/Categories/Categories';
import BooksContainer from './components/BooksContainer/BooksContainer';

const App = () => (
  <>
    <Routes>
      <Route path="/" exact element={<BooksContainer />} />
      <Route path="/Categories" exact element={<Categories />} />
    </Routes>
  </>
);

export default App;
