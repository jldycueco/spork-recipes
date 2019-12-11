import React, { createContext } from 'react';
import useForm from '../customhooks/useForm';
import useAxios from '../customhooks/useAxios';

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const initialValues = { query: '' };

  const { values, handleChange, resetForm } = useForm(initialValues);

  const [{ fetchedData, isError, isLoading }, setUrl] = useAxios(
    {},
    // ,
  );

  return (
    <SearchContext.Provider
      value={{
        values,
        handleChange,
        resetForm,
        fetchedData,
        setUrl,
        isError,
        isLoading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
