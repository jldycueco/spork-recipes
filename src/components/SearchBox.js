import React, { useContext } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Form,
} from 'reactstrap';
import { SearchContext } from '../context/SearchContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

const SearchBox = () => {
  const { values, handleChange, resetForm, setUrl } = useContext(
    SearchContext,
  );

  let history = useHistory();

  const { query } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      setUrl(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
      );
    }
    resetForm();
    history.push(`/query`);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <Button>
              <FontAwesomeIcon icon="search" />
            </Button>
          </InputGroupAddon>
          <Input value={query} name="query" onChange={handleChange} />
        </InputGroup>
      </Form>
    </>
  );
};

export default SearchBox;
