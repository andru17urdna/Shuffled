import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import '../../context/Modal.css';

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const demoLogin = () => {
    const credential = 'Demo-lition'
    const password = 'password'
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }


  return (
    <form className='modal-form' id='modal__form--login' >
        <ul id='error_ul'>
          {errors.map((error, idx) => (
            <li className='error_li' key={idx}>{error}</li>
          ))}
        </ul>
        <label id='modal__username-email--label'>
          Username or Email
          <input
            type="text"
            value={credential}
            autoComplete='off'
            className='modal__input'
            id='modal-login__username-email--input'
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <div id='border-div'></div>
        <label id='modal__password--label'>
          Password
          <input
            type="password"
            value={password}
            className='modal__input'
            id='modal-login__password--input'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <p onClick={demoLogin} id='demo-login__button' className='modal__button' type="submit">Demo</p>
        <p onClick={handleSubmit} id='modal__log-in-button' className='modal__button' type="submit">Log In</p>
    </form>
  );
}

export default LoginForm;
