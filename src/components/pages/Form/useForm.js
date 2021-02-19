import { useState, useEffect, useRef } from 'react';
import validate from './validate';

function useForm(props) {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const isSubmitting = useRef(false);

  function handleChange(e) {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: '',
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(
      validate(values, {...errors}, { username: 'tuanha', password: '123' }),
    );
    isSubmitting.current = true;
  }

  function handleBlur(e) {
    const { name } = e.target;
    setErrors(
      validate(
        values,
        { ...errors },
        { username: 'tuanha', password: '123' },
        name,
      ),
    );
  }

  useEffect(() => {
    if (isSubmitting.current) {
      var isValid = true;
      for (let message in errors) {
        console.log('message', errors[message]);
        if (errors[message] != '') {
          isValid = false;
        }
      }
      if (isValid) {
        props.setIsSubmitted(!props.isSubmitted);
      }
    }
    isSubmitting.current = false;
  }, [errors]);

  return { values, errors, handleChange, handleSubmit, handleBlur };
}

export default useForm;
