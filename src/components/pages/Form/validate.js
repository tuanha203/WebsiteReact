function validate(values, errorsCurrent, valuesCorrect, name) {
  let errors = errorsCurrent;
  if (name) {
    if (!values[name]) {
      errors[name] = `${name[0].toUpperCase() + name.slice(1)} is required.`;
    } /* else if (values[name] != valuesCorrect[name]) {
      errors[name] = `Incorrect ${name[0].toUpperCase() + name.slice(1)}.`;
    } */
    return errors;
  }

  if (!values.username) {
    errors.username = 'Username is required.';
  } else if (values.username != valuesCorrect.username) {
    errors.username = 'Incorrect Username.';
  }

  if (!values.password) {
    errors.password = 'Password is required.';
  } else if (values.password != valuesCorrect.password) {
    errors.password = 'Incorrect Password.';
  }

  return errors;
}

export default validate;
