import React from 'react';
import useAxios from '../../../customhooks/useAxios';
import { useParams } from 'react-router-dom';

const SpecificRecipe = () => {
  const { id } = useParams();

  const [{ fetchedData, isError, isLoading }] = useAxios(
    {},
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );

  return (
    <>
      {isError && <div>Error</div>}
      {isLoading ? (
        <div>Loading</div>
      ) : Object.keys(fetchedData).length > 0 &&
        fetchedData.meals !== null ? (
        <>
          <div>{fetchedData.meals[0].strMeal}</div>
          <img src={fetchedData.meals[0].strMealThumb} alt="img" />
          <div>{fetchedData.meals[0].strInstructions}</div>
        </>
      ) : (
        <div>Error</div>
      )}
    </>
  );
};

export default SpecificRecipe;
