import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignUpFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='profile-container-div'>
        <ProfileButton user={sessionUser} />
        <NavLink className='nav__link' id='nav__browsecard' to="/browsecards">Cards</NavLink>
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
        {/* <NavLink  className='nav__link'>About</NavLink> */}
      </>
    );
  }

  return (
    <div id="nav__container-div">
          <NavLink className='nav__link' id='nav_home' exact to="/">Home</NavLink>

          {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
