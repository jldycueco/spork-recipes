import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { SearchContext } from '../../../context/SearchContext';

const CategoryRecipe = ({ match }) => {
  let { category } = useParams();

  const { fetchedData, isError, isLoading, setUrl } = useContext(
    SearchContext,
  );

  useEffect(() => {
    setUrl(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    );
  });

  return (
    <>
      <div>{match.params.category}</div>
      {isError && <div>Error</div>}
      {isLoading ? (
        <div>Loading</div>
      ) : Object.keys(fetchedData).length > 0 &&
        fetchedData.meals !== null ? (
        <>
          {fetchedData.meals.map((meal) => (
            <div key={meal.idMeal}>
              <div>{meal.strMeal}</div>
              <img src={meal.strMealThumb} alt="img" />
            </div>
          ))}
        </>
      ) : (
        <div>Error</div>
      )}
    </>
  );
};

export default CategoryRecipe;
