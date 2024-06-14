import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import CompanyLogo from '../img/starbsloh.jpg';
import { IonIcon } from '@ionic/react';
import { bookmarkOutline } from 'ionicons/icons';



export const Job = () => {
    return (
        <div className="bg-light">
            <Navbar />
            <div className="container-fluid">
                <div className="container rounded">
                    <div className="rounded shadow-sm">
                        <div className="company-navbar" style={{height:'100px', borderTopLeftRadius: '6px', borderTopRightRadius: '6px'}}></div>
                        <div className="bg-white rounded d-flex align-items-center justify-content-between px-4 pb-4" style={{position: 'relative'}}>
                            <div style={{marginTop: '-40px', zIndex: ''}}>
                                <div className="logo-img rounded-circle" style={{width: '70px', height: '70px'}}>
                                    <img src={CompanyLogo} className='' alt="company logo" />
                                </div>
                                <span style={{lineHeight: '12px'}}>
                                    <h5 className="fw-bold mt-2">UI/UX Designer</h5>
                                    <p>Sharon Hospitals Limited</p>
                                </span>
                                <span className="d-flex gap-2 align-items-center">
                                    <small className="dot text-secondary">Lagos</small>
                                    <small className="text-secondary">Full time</small>
                                </span>
                            </div>
                            <div className="d-flex gap-2 align-items-center justify-content-between" style={{transform: 'translateY(20px)'}}>
                                <button className="btn"><IonIcon icon={bookmarkOutline} /> Save</button>
                                <button className="btn btn-primary">Apply</button>
                            </div>
                        </div>   
                    </div>
                </div>
            </div><br />
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="shadow-sm bg-white rounded px-4 py-3">
                                <h5 style={{fontSize: '17px', fontWeight: '700'}}>Overview</h5>
                                <p>We are a remote team spread across the world looking for able hands to carry this heavy vision. We are a remote team spread across the world looking for able hands to carry this heavy vision. We are a remote team spread across the world looking for able hands to carry this heavy vision.</p>
                                <br />
                                <h5 style={{fontSize: '17px', fontWeight: '700'}}>Responsibilities</h5>
                                <ul>
                                    <li>design scalable and intuitive user interfaces for our sites</li>
                                    <li>design scalable and intuitive user interfaces for our sites</li>
                                    <li>design scalable and intuitive user interfaces for our sites</li>
                                    <li>design scalable and intuitive user interfaces for our sites</li>
                                </ul>
                                <br />
                                <h5 style={{fontSize: '17px', fontWeight: '700'}}>Qualifications</h5>
                                <ul>
                                    <li>Bsc degree (any course)</li>
                                    <li>certificate</li>
                                    <li>good recommendations</li>
                                </ul>
                            </div><br />
                            <div className="shadow-sm bg-white rounded px-4 py-3">
                                <h5 style={{fontSize: '17px', fontWeight: '700'}}>About the Company</h5>
                                <div className="row">
                                    <div className="col-lg-9">
                                        <p>Sharon hotels limited is a top notch hospital. One of the best in the world with results to show forth. Sharon hotels limited is a top notch hospital. One of the best in the world with results to show forth. Sharon hotels limited is a top notch hospital. One of the best in the world with results to show forth.</p>
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
                                    <h5 style={{fontSize: '17px', marginBottom: '-1px', fontWeight: '700'}}>N150,000 - N200,000</h5>
                                    <small className="text-secondary">Average salary</small>
                                </span>
                                <div className="mt-3">
                                    <p className='text-start'>Job Type: <strong><small>full time</small></   strong></p>
                                    <p className='text-start'>Location: <strong><small>Lagos</small></   strong></p>
                                    <p className='text-start'>Email: <strong><small>sharonltd@gmail.com</small></   strong></p>
                                    <p className='text-start'>Posted: <strong><small>11th June, 2024</small></strong></ p>
                                    <p className='text-start'>Deadline: <strong><small>20th September, 2024</small></strong></p>

                                </div>
                            </div><br />
                            <div className="shadow-sm bg-white rounded px-3 py-3">
                                <h5 style={{fontSize: '17px', fontWeight: '700'}}>Related Jobs</h5>
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
            </div><br /><br />
            <Footer />
        </div>
    )
}