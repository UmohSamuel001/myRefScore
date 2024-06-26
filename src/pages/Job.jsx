import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { OffCanvas } from "../components/Offcanvas";
import CompanyLogo from '../img/starbsloh.jpg';
import { IonIcon } from '@ionic/react';
import { bookmarkOutline } from 'ionicons/icons';
import { useState } from "react";



export const Job = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

    return (
        <div className="bg-four">
            <Navbar toggleSidebar={handleShow} logoColor="color-one" />
            <OffCanvas show={showOffcanvas} handleClose={handleClose} />

            <div className="container-fluid resize">
                <div className="container rounded">
                    <div className="rounded shadow-sm">
                        <div className="company-navbar" style={{height:'100px', borderTopLeftRadius: '6px', borderTopRightRadius: '6px'}}></div>
                        <div className="bg-white rounded d-flex align-items-center justify-content-between px-4 pb-4" style={{position: 'relative'}}>
                            <div style={{marginTop: '-40px', zIndex: ''}}>
                                <div className="logo-img rounded-circle" style={{width: '70px', height: '70px'}}>
                                    <img src={CompanyLogo} className='' alt="company logo" />
                                </div>
                                <span style={{lineHeight: '15px'}}>
                                    <h5 className="fw-bold mt-2 color-one">UI/UX Designer</h5>
                                    <p>Sharon Hospitals Limited</p>
                                </span>
                                <span className="d-flex gap-2 align-items-center">
                                    <small className="dot text-secondary">Lagos</small>
                                    <small className="text-secondary">Full time</small>
                                </span>
                            </div>
                            <div className="d-flex gap-2 align-items-center justify-content-between" style={{transform: 'translateY(20px)'}}>
                                <button className="btn btn-sm"><IonIcon icon={bookmarkOutline} /> Save</button>
                                <button className="btn btn-primary btn-sm">Apply</button>
                            </div>
                        </div>   
                    </div>
                </div>
            </div><br />
            <div className="container-fluid resize">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="shadow-sm bg-white rounded px-4 py-3">
                                <h5 className="h5">Overview</h5>
                                <p className="text-secondary">We are a remote team spread across the world looking for able hands to carry this heavy vision. We are a remote team spread across the world looking for able hands to carry this heavy vision. We are a remote team spread across the world looking for able hands to carry this heavy vision.</p>
                                <br />
                                <h5 className="h5">Responsibilities</h5>
                                <ul className="text-secondary">
                                    <li>design scalable and intuitive user interfaces for our sites</li>
                                    <li>design scalable and intuitive user interfaces for our sites</li>
                                    <li>design scalable and intuitive user interfaces for our sites</li>
                                    <li>design scalable and intuitive user interfaces for our sites</li>
                                </ul>
                                <br />
                                <h5 className="h5">Qualifications</h5>
                                <ul className="text-secondary">
                                    <li>Bsc degree (any course)</li>
                                    <li>certificate</li>
                                    <li>good recommendations</li>
                                </ul>
                            </div><br />
                                <div className="shadow-sm bg-white rounded px-4 py-3 large">
                                    <h5 className="h5">About the Company</h5>
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <p className="text-secondary">Sharon hotels limited is a top notch hospital. One of the best in the world with results to show forth. Sharon hotels limited is a top notch hospital. One of the best in the world with results to show forth. Sharon hotels limited is a top notch hospital. One of the best in the world with results to show forth.</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="logo-img rounded-circle ms-4" style={{width: '80px', height: '80px'}}>
                                                <img src={CompanyLogo} className='' alt="company logo" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="shadow-sm bg-white rounded px-3 py-3">
                                <span>
                                    <h5 className="h5" style={{marginBottom: '-1px'}}>N150,000 - N200,000</h5>
                                    <small className="text-secondary">Average salary</small>
                                </span>
                                <div className="mt-3 text-secondary">
                                    <p>Job Type: <strong><small>full time</small></   strong></p>
                                    <p>Location: <strong><small>Lagos</small></   strong></p>
                                    <p>Email: <strong><small>sharonltd@gmail.com</small></   strong></p>
                                    <p>Posted: <strong><small>11th June, 2024</small></strong></ p>
                                    <p>Deadline: <strong><small>20th September, 2024</small></strong></p>

                                </div>
                            </div><br />
                            <div className="shadow-sm bg-white rounded px-4 py-3 mobile">
                                <h5 className="color-one h5">About the Company</h5>
                                <div className="row mt-3">
                                    <div className="col-lg-3 mobile">
                                        <div className="logo-img rounded-circle" style={{width: '80px', height: '80px'}}>
                                            <img src={CompanyLogo} className='' alt="company logo" />
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <p className="text-secondary mt-2">Sharon hotels limited is a top notch hospital. One of the best in the world with results to show forth. Sharon hotels limited is a top notch hospital. One of the best in the world with results to show forth. Sharon hotels limited is a top notch hospital. One of the best in the world with results to show forth.</p>
                                    </div>
                                    <div className="col-lg-3 large">
                                        <div className="logo-img rounded-circle ms-4" style={{width: '80px', height: '80px'}}>
                                            <img src={CompanyLogo} className='' alt="company logo" />
                                        </div>
                                    </div>
                                </div>
                            </div><br />
                            <div className="try">
                            <div className="shadow-sm bg-white rounded px-3 py-3">
                                <h5 className="color-one h5">Related Jobs</h5>
                                <div className="mt-3">
                                    <ul className="realted-jobs-list">
                                      <li>Ui/Ux design</li>
                                      <li>Graphics designer</li>
                                      <li>frontend developer</li>
                                      <li>illustrator</li>
                                      <li>digital artist</li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br /><br /><br />
            <Footer />
        </div>
    )
}