import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history =useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push(`/`);
  };

  return (
    <>
        <p className='nav__link' id='nav__link-profile' onClick={openMenu}>{user.username}</p>
      {showMenu && (
        <ul className="profile-dropdown">
          <li className='profile-dropdown__li'><Link className='profile-link'>My Profile</Link></li>
          <li className='profile-dropdown__li'><Link className='profile-link' to='/browsecards'>My Collection</Link></li>
          <li className='profile-dropdown__li'><Link className='profile-link' to='/addcard'>Add Cards</Link></li>
          <li className='profile-dropdown__li'><Link className='profile-link'>Add Store</Link></li>
          <li id='profile-dropdown__log-out' className='profile-dropdown__li profile-link' onClick={logout}>Log Out</li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
