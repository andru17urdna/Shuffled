import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
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
  };

  return (
    <>
        <p className='nav__link' id='nav__link-profile' onClick={openMenu}>{user.username}</p>
      {showMenu && (
        <ul className="profile-dropdown">
          <li className='profile-dropdown__li'>My Profile</li>
          {/*  user.username*/}
          <li className='profile-dropdown__li'>My Collection</li>
          <li className='profile-dropdown__li'>Add Cards</li>
          <li className='profile-dropdown__li'>Add Store</li>
          {/*user.email */}
          <li id='profile-dropdown__log-out' className='profile-dropdown__li' onClick={logout}>Log Out</li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
