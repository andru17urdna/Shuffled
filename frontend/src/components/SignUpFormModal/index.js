import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignUpForm';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <p className='nav__link' id='nav_sign-up' onClick={() => setShowModal(true)}>Sign Up</p>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
