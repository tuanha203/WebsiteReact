import React from 'react';
import FormLogin from './FormLogin'
import FormSuccess from './FormSuccess';
import Home from '../Home/Home'
function Form(props) {
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  return (
    <div className="form-all">
      {
        !isSubmitted ? 
        <FormLogin setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted}/> : 
        <FormSuccess/>
      }
    </div>
  );
}

export default Form;