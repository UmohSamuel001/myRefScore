import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { IonIcon } from '@ionic/react';
import { mail, lockClosed, call, person } from 'ionicons/icons';
import { useState } from 'react';
import { ModalForm } from "../components/Modal";


export const Signup = ({ onSwitchToLogin  }) => {
//     const [showModal, setShowModal] = useState(false);
//   const [modalType, setModalType] = useState('login');

//   const handleModalClose = () => setShowModal(false);

//   const handleModalShow = (type) => {
//     setModalType(type);
//     setShowModal(true);
//   };


    return (
        <div className='mb-2'>
             <Form>
                <Form.Group as={Col} controlId="formGridEmail" className='mb-2'>
                  <Form.Label>Full Name</Form.Label>
                  <div className="input-group">
                     <div className="input-group-text btn px-4 py-2"><IonIcon icon={person} /></div>
                    <input type="text" className="form-control" placeholder="your full name..."></input>
                  </div>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPssd" className='mb-3'>
                  <Form.Label>Email</Form.Label>
                  <div className="input-group">
                     <div className="input-group-text btn px-4 py-2"><IonIcon icon={mail} /></div>
                    <input type="text" className="form-control" placeholder="your email address..."></input>
                  </div>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPssd" className='mb-3'>
                  <Form.Label>Phone Number</Form.Label>
                  <div className="input-group">
                     <div className="input-group-text btn px-4 py-2"><IonIcon icon={call} /></div>
                    <input type="text" className="form-control" placeholder="your phone number..."></input>
                  </div>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPssd" className='mb-3'>
                  <Form.Label>Password</Form.Label>
                  <div className="input-group">
                     <div className="input-group-text btn px-4 py-2"><IonIcon icon={lockClosed} /></div>
                    <input type="text" className="form-control" placeholder="your password..."></input>
                  </div>
                </Form.Group>

                <div className="d-flex gap-3 align-items-center mb-4">
                    <Link to='/user-dashboard'>
                        <button className='btn btn-blue text-white fw-semibold modal-btn'>Signup</button>
                    </Link>
                    <button className='btn'>sign in with Google</button>
                </div>
            </Form>
            <small style={{color: '#0a326f', fontSize: '12px'}}>forgot password? | Have an acount? 
                <strong  onClick={onSwitchToLogin} className='toggle'> SIGN IN</strong>
            </small>
        </div>
    )
}