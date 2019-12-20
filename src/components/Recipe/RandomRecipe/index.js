import React, { useContext, useEffect } from 'react';
import { SearchContext } from '../../../context/SearchContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card,
  CardHeader,
  CardBody,
  CardLink,
  CardImg,
  Container,
  Row,
  Col,
} from 'reactstrap';

const RandomRecipe = () => {
  const { fetchedData, isError, isLoading, setUrl } = useContext(
    SearchContext,
  );

  useEffect(() => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/random.php`);
  }, [setUrl]);

  let ingredientMeasurement = [];

  if (Object.keys(fetchedData).length > 0) {
    let p = fetchedData.meals[0];

    let ingredientArray = [];
    let measurementArray = [];

    for (let key in p) {
      if (p.hasOwnProperty(key)) {
        if (key.includes('strIngredient') && p[key] !== null) {
          if (p[key].length > 0) {
            ingredientArray.push(p[key]);
          }
        } else if (key.includes('strMeasure') && p[key] !== null) {
          if (p[key].length > 0) {
            measurementArray.push(p[key]);
          }
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
      <br />
      {isError ? (
        <div>Could not load data from Server</div>
      ) : isLoading ? (
        <div>Loading</div>
      ) : (
        Object.keys(fetchedData).length > 0 && (
          <>
            <Container>
              <Row>
                <Col xs="6">
                  <Card>
                    <CardHeader>
                      {fetchedData.meals[0].strMeal}
                    </CardHeader>
                    <CardImg
                      top
                      width="100%"
                      src={fetchedData.meals[0].strMealThumb}
                      alt="img"
                    />
                    <CardBody>
                      <CardLink href={fetchedData.meals[0].strSource}>
                        <FontAwesomeIcon icon="external-link-alt" />
                      </CardLink>
                      <CardLink
                        href={fetchedData.meals[0].strYoutube}
                      >
                        <FontAwesomeIcon icon={['fab', 'youtube']} />
                      </CardLink>
                    </CardBody>
                  </Card>
                </Col>
                <Col xs="6">
                  <h3>Ingredients:</h3>
                  <ul>
                    {ingredientMeasurement.map(
                      (ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ),
                    )}
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col>
                  <br />
                  <h3>Instructions:</h3>
                  <ul>
                    {fetchedData.meals[0].strInstructions
                      .split('. ')
                      .map((strInstruction, index) => (
                        <li key={index}>{strInstruction}</li>
                      ))}
                  </ul>
                </Col>
              </Row>
            </Container>
          </>
        )
      )}
    </>
  );
};

export default RandomRecipe;
