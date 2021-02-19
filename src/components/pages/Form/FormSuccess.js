import React from 'react';
import './FormSuccess.css';
import { Link } from 'react-router-dom';

import checkSuccess from '../../../images/check-success.svg';
function FormSuccess(props) {
  return (
    <div className="background-form__success">
      <div className="notice-success">
        <img src={checkSuccess} alt="" />
        <h3>Thank you!</h3>
        <p>Your account has been successfully.</p>
        <Link to="/">
          <button>Return Home</button>
        </Link>
      </div>
    </div>
  );
}

export default FormSuccess;
