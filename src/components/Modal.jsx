import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Login } from "./LoginForm";
import { Signup } from "./SignUp";
import { IonIcon } from '@ionic/react';
import { logInOutline } from 'ionicons/icons';


export const ModalForm = ({ show, handleClose, initialModalType }) => {
    const [modalType, setModalType] = useState(initialModalType);

    // Reset modalType when the modal is opened or closed
    useEffect(() => {
        if (show) {
            setModalType(initialModalType);
        }
    }, [show, initialModalType]);

    const toggleForm = (formType) => {
        setModalType(formType);
    };
   
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
            <Modal.Title className='color-one d-flex gap-1 align-items-center modal-title fw-bold modal-title-px'>{modalType === 'login' ? 'Log In' : 'Sign Up'} <IonIcon icon={logInOutline} /></Modal.Title>
        </Modal.Header>
      
        <Modal.Body className='modal-px'>
            {modalType === 'login' 
                ? <Login onSwitchToSignup={() => toggleForm('signup')} /> 
                : <Signup onSwitchToLogin={() => toggleForm('login')} />
            }
        </Modal.Body>
      </Modal>
    </>
  );
}