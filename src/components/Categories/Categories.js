import React from 'react';
import { useDispatch } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import { categAction } from '../../Redux/Categories/Categories';

const Categories = () => {
  const dispatch = useDispatch();

  const handleStatus = () => {
    dispatch(categAction());
  };

  return (
    <div>
      <Navigation />
      <button type="button" onClick={handleStatus}>Check status</button>
    </div>
  );
};

export default Categories;
