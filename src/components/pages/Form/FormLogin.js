import React from 'react';
import './FormLogin.css';
import useForm from './useForm';
import classNames from 'classnames';
function FormLogin(props) {
  const { values, errors, handleChange, handleSubmit, handleBlur } = useForm({...props});
  return (
    <div className="background-form__login">
      <h1 className="title-form">LOGIN FORM</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="user-img">
          <img
            src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png"
            alt=""
          />
        </div>
        <div className='form-group'>
          <input
            id="username"
            name="username"
            type="text"
            className={classNames('form-control', {'invalid': errors.username})}
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span className="form-message">
          {
            errors.username ? errors.username : '' 
          }
          </span>
        </div>

        <div className="form-group">
          <input
            id="password"
            name="password"
            type="text"
            className={classNames('form-control', {'invalid': errors.password})}
            placeholder="PassWord"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            
          />
          <span className="form-message">
          {
            errors.password ? errors.password : '' 
          }
          </span>
        </div>
        <label className="checkbox-remember">
          Keep Me Logged In?
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <button className="submit">LOG IN</button>
      </form>
    </div>
  );
}

export default FormLogin;
