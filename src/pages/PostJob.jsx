import { Sidebar } from "../components/Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { IonIcon } from '@ionic/react';
import { settingsOutline, notificationsOutline, qrCodeOutline, addOutline, albumsOutline, attachOutline, bag } from 'ionicons/icons';
import CompanyLogo from '../img/starbsloh.jpg';
import pic1 from '../img/pic1.png';
import pic2 from '../img/pic3.png';
import pic3 from '../img/img30.jpg';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export const PostJob = () => {
    return (
        <div className="bg-two">
            <Sidebar />
            <div id="main2">
                <div className="company-navbar px-4 py-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <span className="d-flex gap-3 align-items-center justify-content-start ms-3">
                            <div className="logo-img" style={{width: '35px', height: '35px'}}>
                                <img src={CompanyLogo} className='rounded-circle' alt="company logo" />
                            </div>
                            <h5 className="fw-semibold text-white mt-1">Sharon Hospitals Limited</h5>
                        </span>
                        <div className="d-flex gap-3 me-3">
                            <IonIcon icon={qrCodeOutline} className="text-white" />
                            <IonIcon icon={notificationsOutline} className="text-white" />
                            <IonIcon icon={settingsOutline} className="text-white" />
                        </div>
                    </div><br />
                    <div className="d-flex align-items-center justify-content-between mt-2 pb-5">
                        <div className="d-flex gap-3 ms-3">
                            <div className="d-flex">
                                <div className="flex-dp-div right">
                                    <img src={pic1} alt="employee dp" />
                                </div>
                                <div className="flex-dp-div right">
                                    <img src={pic2} alt="employee dp" />
                                </div>
                                <div className="flex-dp-div">
                                    <img src={pic3} alt="employee dp" />
                                </div>
                            </div>
                            <button className="btn btn-outline-danger btn-sm text-white">
                                <IonIcon icon={addOutline} /> add employee
                            </button>
                            <button className="btn btn-sm text-white bg-three-btn">
                            <IonIcon icon={albumsOutline} /> job manager
                            </button>
                        </div>

                        <div className="d-flex gap-3">
                            <button className="btn btn-info btn-sm text-white">
                                <IonIcon icon={attachOutline} /> post job
                            </button>
                            <button className="btn btn-secondary btn-sm text-white">
                                <FontAwesomeIcon icon={faComment} /> messages
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row g-3 h-100 px-3">
                    <div class="col-lg-9">
                        <div className="h-100 rounded">
                            <div className="bg-white rounded px-4 pt-2 pb-3 shadow-sm">
                                <h6 className='mt-3' style={{fontSize: '17px'}}>Submit A Job</h6>
                                <Form>
                                  <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                      <Form.Label>Job Title</Form.Label>
                                      <Form.Control type="text" placeholder="web developer" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                      <Form.Label>Location</Form.Label>
                                      <Form.Control type="text" placeholder="Marian rd" />
                                    </Form.Group>
                                  </Row>

                                  <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                      <Form.Label>Job Type</Form.Label>
                                      <Form.Control type="text" placeholder="full time" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                      <Form.Label>Job Category</Form.Label>
                                      <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                      </Form.Select>
                                    </Form.Group>
                                  </Row>


                                  <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Salary Range</Form.Label>
                                    <Form.Control placeholder="N200,000 - N250,000" />
                                  </Form.Group>

                                  <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control placeholder="skilled developer needed" />
                                  </Form.Group>

                                  <Form.Group className="mb-3" controlId="formGridAddress2">
                                    <Form.Label>Application Email</Form.Label>
                                    <Form.Control placeholder="sharonltd@gmail.com" />
                                  </Form.Group>

                                  <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                      <Form.Label>Job Tags (optional)</Form.Label>
                                      <Form.Control placeholder="any" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                      <Form.Label>Qualifications</Form.Label>
                                      <Form.Control placeholder="Bsc" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                      <Form.Label>Application Deadline</Form.Label>
                                      <Form.Control type="date" />
                                    </Form.Group>
                                  </Row>

                                  <button className="btn btn-secondary">
                                    submit
                                  </button>
                                </Form>
                            </div><br />
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div className="bg-white h-100 pt-4 side-profile rounded shadow-sm">
                            <div className="text-center d-flex align-items-center justify-content-between" style={{flexDirection:'column'}}>
                                <div className="logo-img rounded-circle" style={{width: '70px', height: '70px'}}>
                                    <img src={CompanyLogo} className='' alt="company logo" />
                                </div>
                                <h5 className="fw-bold mt-2">Sharon Hospitals Limited</h5>
                                <span className="d-flex gap-2 align-items-center">
                                    <IonIcon icon={bag} />
                                    <small>Health</small>
                                </span>
                            </div><br />
                            <div className="px-3 mt-1">
                                <p className="text-secondary" style={{fontSize: '13px',  marginTop: '-8px'}}>Sharon hotels limited is a top notch hospital. One of the best in the world with results to show forth. Sharon hotels limited is a top notch hospital. One of the best in the world with results to show forth. Sharon hotels limited is a top notch hospital. One of the best in the world with results to show forth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}