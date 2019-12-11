import { useState } from 'react';

const useForm = (initialValues, initialTouch, callback) => {
  const [values, setValues] = useState(initialValues || {});
  const [isTouched, setisTouched] = useState(initialTouch);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = (event) => {
    setValues(initialValues);
  };

  const handleBlur = (field) => (event) => {
    setisTouched({ ...isTouched, [field]: true });
  };

  const resetBlur = (event) => {
    setisTouched(initialTouch);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    callback();
  };

  return {
    values,
    setValues,
    handleChange,
    resetForm,
    handleSubmit,
    isTouched,
    handleBlur,
    resetBlur,
  };
};

export default useForm;
