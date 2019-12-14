import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { SearchContext } from '../../../context/SearchContext';
import RecipeCard from '../Card/index';

const CategoryRecipe = () => {
  let { category } = useParams();

  const { fetchedData, isError, isLoading, setUrl } = useContext(
    SearchContext,
  );

  useEffect(() => {
    setUrl(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    );
  }, [setUrl, category]);

  return (
    <>
      <div>{category}</div>
      {isError && <div>Error</div>}
      {isLoading ? (
        <div>Loading</div>
      ) : Object.keys(fetchedData).length > 0 &&
        fetchedData.meals !== null ? (
        <>
          {fetchedData.meals.map(
            ({
              idMeal,
              strMeal,
              strMealThumb,
              strSource,
              strYoutube,
            }) => (
              <RecipeCard
                key={idMeal}
                id={idMeal}
                title={strMeal}
                img={strMealThumb}
                source={strSource}
                video={strYoutube}
              />
            ),
          )}
        </>
      ) : (
        <div>Error</div>
      )}
    </>
  );
};

export default CategoryRecipe;
