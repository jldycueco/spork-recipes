import React, { useContext, useEffect } from 'react';
import { SearchContext } from '../../../context/SearchContext';

const RandomRecipe = () => {
  const { fetchedData, isError, isLoading, setUrl } = useContext(
    SearchContext,
  );

  useEffect(() => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/random.php`);
  }, [setUrl]);

  console.log(fetchedData);
  return (
    <>
      {isError && <div>Error</div>}
      {isLoading ? (
        <div>Loading</div>
      ) : (
        Object.keys(fetchedData).length > 0 && (
          <>
            <div>{fetchedData.meals[0].strMeal}</div>
            <img src={fetchedData.meals[0].strMealThumb} alt="img" />
            <div>{fetchedData.meals[0].strInstructions}</div>
          </>
        )
      )}
    </>
  );
};

export default RandomRecipe;
