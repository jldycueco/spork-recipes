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
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style
          component for calling extra attention to featured content or
          information.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space
          content out within the larger container.
        </p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
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
