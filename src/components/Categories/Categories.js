import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import { categAction } from '../../Redux/Categories/Categories';

const Categories = () => {
  const dispatch = useDispatch();

  const handleStatus = () => {
    dispatch(categAction());
  };

  const status = useSelector((state) => state.categoriesReducer);

  return (
    <div>
      <Navigation />
      <button type="button" onClick={handleStatus}>Check status</button>
      <h2>{status}</h2>
    </div>
  );
};

export default Categories;
