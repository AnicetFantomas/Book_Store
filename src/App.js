import { Routes, Route } from 'react-router-dom';
import Categories from './components/Categories/Categories';
import BooksContainer from './components/BooksContainer/BooksContainer';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<BooksContainer />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
