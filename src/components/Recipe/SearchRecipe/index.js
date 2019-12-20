import React, { useContext } from 'react';
import { SearchContext } from '../../../context/SearchContext';
import RecipeCard from '../Card/index';
import { Row, Col, CardColumns } from 'reactstrap';

const SearchRecipe = () => {
  const { fetchedData, isError, isLoading } = useContext(
    SearchContext,
  );

  return (
    <>
      <Row>
        <Col>
          <CardColumns>
            {isError ? (
              <div>Please input a search term</div>
            ) : isLoading ? (
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
          </CardColumns>
        </Col>
      </Row>
    </>
  );
};

export default SearchRecipe;
