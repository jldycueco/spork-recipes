import React from 'react';
import {
  Card,
  CardBody,
  CardLink,
  CardTitle,
  CardImg,
  Button,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

const RecipeCard = ({ title, img, source, video, id }) => {
  let history = useHistory();

  const handleClick = (id) => {
    history.push(`/recipe/${id}`);
  };

  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>{title}</CardTitle>
        </CardBody>
        <CardImg top width="50%" src={img} alt="image" />
        <CardBody>
          {source && (
            <CardLink href={source}>
              <FontAwesomeIcon icon="external-link-alt" />
            </CardLink>
          )}
          {video && (
            <CardLink href={video}>
              <FontAwesomeIcon icon={['fab', 'youtube']} />
            </CardLink>
          )}
          <CardLink>
            <Button color="primary" onClick={() => handleClick(id)}>
              Show More
            </Button>
          </CardLink>
        </CardBody>
      </Card>
    </>
  );
};

export default RecipeCard;
