import React from 'react';
import MealDB from '../../assets/images/theMealDB.png';

const Footer = () => {
  return (
    <>
      <div>Powered by: </div>
      <img src={MealDB} alt="logo" />;
    </>
  );
};

export default Footer;
