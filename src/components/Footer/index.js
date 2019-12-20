import React, { useContext } from 'react';
import MealDB from '../../assets/images/theMealDB.png';
import { SearchContext } from '../../context/SearchContext';

const Footer = () => {
  return (
    <>
      <div>Powered by: </div>
      <img src={MealDB} alt="logo" />
    </>
  );
};

export default Footer;
