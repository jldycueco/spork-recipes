import React from 'react';
import useAxios from '../../../customhooks/useAxios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SpecificRecipe = () => {
  const { id } = useParams();

  const [{ fetchedData, isError, isLoading }] = useAxios(
    {},
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );

  let ingredientMeasurement = [];

  if (Object.keys(fetchedData).length > 0) {
    let p = fetchedData.meals[0];

    let ingredientArray = [];
    let measurementArray = [];

    for (let key in p) {
      if (p.hasOwnProperty(key)) {
        if (key.includes('strIngredient') && p[key].length > 0) {
          ingredientArray.push(p[key]);
        } else if (key.includes('strMeasure') && p[key].length > 0) {
          measurementArray.push(p[key]);
        }
      }
    }

    ingredientMeasurement = ingredientArray.map(
      (ingredient, index) =>
        measurementArray[index] + ' ' + ingredientArray[index],
    );
  }

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
          <a href={fetchedData.meals[0].strYoutube}>
            <FontAwesomeIcon icon={['fab', 'youtube']} />
          </a>
          <a href={fetchedData.meals[0].strSource}>
            <FontAwesomeIcon icon="external-link-alt" />
          </a>

          <ul>
            {ingredientMeasurement.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <ul>
            {fetchedData.meals[0].strInstructions
              .split('. ')
              .map((strInstruction, index) => (
                <li key={index}>{strInstruction}</li>
              ))}
          </ul>
        </>
      ) : (
        <div>Error</div>
      )}
    </>
  );
};

export default SpecificRecipe;
