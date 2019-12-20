import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { SearchContext } from '../../../context/SearchContext';
import RecipeCard from '../Card/index';
import { Jumbotron, Row, Col, CardColumns } from 'reactstrap';

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

  console.log(fetchedData);
  return (
    <>
      <Jumbotron>
        <h1 className="display-3">{category}</h1>
        <p className="lead">
          {`Please see our list of recipes for ${category}`}
        </p>
      </Jumbotron>
      <Row>
        <Col>
          <CardColumns>
            {isError ? (
              <div>Could not load data from Server</div>
            ) : isLoading ? (
              <div>Loading</div>
            ) : Object.keys(fetchedData).length > 0 &&
              fetchedData.meals !== null ? (
              <>
                {fetchedData.meals.map(
                  ({ idMeal, strMeal, strMealThumb }) => (
                    <RecipeCard
                      key={idMeal}
                      id={idMeal}
                      title={strMeal}
                      img={strMealThumb}
                    />
                  ),
                )}
              </>
            ) : (
              <div>Error</div>
            )}
          </CardColumns>
        </Col>
      </Row>
    </>
  );
};

export default CategoryRecipe;
