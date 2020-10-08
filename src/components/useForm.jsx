import { useState, useEffect } from 'react';

const useFrom = (callback, validate) => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmedPassword: '',
    // isSubmitting: false,
    // errorMessage: null,
  });
  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;

    setValues({
      ...values,
      [name]: value,
      // isSubmitting: true,
      // errorMessage: null,
    });
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    // check to see if there are no errors
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleInputChange,
    handleFormSubmit,
    values,
    errors,
  };
};

export default useFrom;
