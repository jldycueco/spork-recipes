import React, { useContext } from 'react';
import { SearchContext } from '../../../context/SearchContext';
import RecipeCard from '../Card/index';

const SearchRecipe = () => {
  const { fetchedData, isError, isLoading } = useContext(
    SearchContext,
  );

  console.log(fetchedData);

  return (
    <>
      Search recipe
      {isError && <div>Error</div>}
      {isLoading ? (
        <div>Loading</div>
      ) : Object.keys(fetchedData).length > 0 &&
        fetchedData.meals !== null ? (
        fetchedData.meals.map((meal) => (
          <RecipeCard
            key={meal.idMeal}
            id={meal.idMeal}
            title={meal.strMeal}
            img={meal.strMealThumb}
            source={meal.strSource}
            video={meal.strYoutube}
          />
        ))
      ) : (
        <div>No Results Found</div>
      )}
    </>
  );
};

export default SearchRecipe;
