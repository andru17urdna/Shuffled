import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import '../../context/Modal.css';

function SignupForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <form className='modal-form' id ='modal__form--signup' onSubmit={handleSubmit} >
      <div id='error_ul-container-div'>
        <ul id='signup__errors'>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
      </div>
      <div id='modal-form__container-div'>
        <label className='sign-up__label' id='sign-up__label--email'>
          Email
          <input
            type="text"
            className='modal__input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className='sign-up__label' id='sign-up__label--username' >
          Username
          <input
            type="text"
            className='modal__input'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label className='sign-up__label' id='sign-up__label--password'>
          Password
          <input
            type="password"
            className='modal__input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label className='sign-up__label' id='sign-up__label--c-password'>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            className='modal__input'
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
      </div>
      <p onClick={handleSubmit} className="modal__button" id='sign-up__label--button' type="submit">Sign Up</p>
    </form>
  );
}

export default SignupForm;
