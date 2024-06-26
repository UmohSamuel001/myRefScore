import React from 'react';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { homeOutline, listOutline, attachOutline, albumsOutline, cartOutline } from 'ionicons/icons';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const OffCanvas = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="start" className="custom-offcanvas">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
      <div className='d-flex justify-content-center bg-white mobile-sidebar'>
                <div className="sidenav-wrapper p-3">
                  <span className="text-center">
                    <h5 className="fw-bold color-one mt-2 mb-4">My Ref Score</h5>
                  </span>
                  <ul className="sidenav-nav ps-0 h-100">
                      <li className="unactive-item">
                          <Link to='/post-job'>
                              <IonIcon icon={attachOutline} />
                              <span>Post Job</span>
                          </Link>
                      </li>
                      <li className="unactive-item">
                          <Link to='/my-job-listings'>
                              <IonIcon icon={listOutline} />
                              <span>Job Lisitings</span>
                          </Link>
                      </li>
                      <li className="unactive-item">
                          <Link to='/job'>
                              <IonIcon icon={albumsOutline} />
                              <span>Jobs</span>
                          </Link>
                      </li>
                      <li className="unactive-item">
                          <Link to='/company-dashboard'>
                              <IonIcon icon={homeOutline} />
                              <span>Company</span>
                          </Link>
                      </li>
                      <li className="unactive-item">
                          <Link to='/job-market'>
                              <IonIcon icon={cartOutline} />
                              <span>Job Market</span>
                          </Link>
                      </li>
                      {/* <li className="unactive-item">
                          <Link to=''>
                              <IonIcon icon={personOutline} />
                              <span>Profile</span>
                          </Link>
                      </li>
                      <li className="unactive-item logout">
                          <Link to=''>
                              <IonIcon icon={logOutOutline} />
                              <span>Logout</span>
                          </Link>
                      </li> */}
                  </ul>
                </div>
            </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}