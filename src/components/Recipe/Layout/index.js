import React, { useContext, useEffect } from 'react';
import { Jumbotron, Button, Row, Col, CardColumns } from 'reactstrap';
import RecipeCard from '../Card';
import { SearchContext } from '../../../context/SearchContext';

const RecipeLayout = () => {
  const { fetchedData, isError, isLoading, setUrl } = useContext(
    SearchContext,
  );

  useEffect(() => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`);
  }, [setUrl]);

  return (
    <>
      <Jumbotron>
        <h1 className="display-3">Welcome!</h1>
        <p className="lead">
          This is a recipe website built using React.js. You can
          search recipes by category or you can surprise yourself with
          a random recipe.
        </p>
      </Jumbotron>

      <Row>
        <Col>
          <CardColumns>
            {isError && <div>Error</div>}
            {isLoading ? (
              <div>Loading</div>
            ) : (
              Object.keys(fetchedData).length > 0 &&
              fetchedData.meals.map(
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
              )
            )}
          </CardColumns>
        </Col>
      </Row>
    </>
  );
};

export default RecipeLayout;
