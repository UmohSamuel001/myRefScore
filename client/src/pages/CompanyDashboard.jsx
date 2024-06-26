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
import { Table } from "react-bootstrap";
import { RatingComponent } from "../components/RatingComponent";
import amazondp from '../img/amazz.jpg';
import Levisdp from '../img/Levis-Logo-Design-1024x683.webp';



export const CompanyDashboard = () => {
    return (
        <div className="bg-four">
            <Sidebar />
            <div id="main2">
                <div className="company-navbar px-4 py-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <span className="d-flex gap-3 align-items-center justify-content-start">
                            <div className="logo-img" style={{width: '35px', height: '35px'}}>
                                <img src={CompanyLogo} className='rounded-circle' alt="company logo" />
                            </div>
                            <div className="name-div">
                                <h5 className="fw-semibold text-white mt-1">Sharon Hospitals Limited</h5>
                            </div>
                        </span>
                        <div className="d-flex gap-3 me-3">
                            <IonIcon icon={qrCodeOutline} className="text-white" />
                            <IonIcon icon={notificationsOutline} className="text-white" />
                            <IonIcon icon={settingsOutline} className="text-white" />
                        </div>
                    </div><br />
                    <div className="d-flex align-items-center justify-content-between mt-2 pb-5">
                        <div className="d-flex gap-3">
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
                                <IonIcon icon={addOutline} />
                            </button>
                            <button className="btn btn-sm text-white bg-three-btn">
                                <IonIcon icon={albumsOutline} />
                            </button>
                        </div>

                        <div className="d-flex gap-3">
                            <button className="btn btn-info fs-6 btn-sm text-white">
                                <IonIcon icon={attachOutline} />
                            </button>
                            <button className="btn btn-secondary btn-sm text-white">
                                <FontAwesomeIcon icon={faComment} />
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row g-3 h-100 px-3">
                    <div class="col-lg-9">
                        <div className="h-100 rounded">
                            <div className="progress-div">
                            <div className="row g-3">
                                <div className="col-lg-4">
                                    <div className="bg-white px-3 pt-2 pb-2 rounded shadow-sm">
                                        <small><strong>All Employees</strong></small>
                                        <h3 className="mt-3">21</h3>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="bg-white px-3 pt-2 pb-2 rounded shadow-sm">
                                        <small><strong>Posted Jobs</strong></small>
                                        <h3 className="mt-3">14</h3>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="bg-white px-3 pt-2 pb-2 rounded shadow-sm">
                                        <small><strong>Applications</strong></small>
                                        <h3 className="mt-3">176</h3>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <br />
                            <div className="bg-white rounded px-3 pt-2 pb-3 shadow-sm">
                                <h6 className='mt-3' style={{fontSize: '17px'}}>My Job Listings</h6>
                                <Table bordered responsive className="table mt-1">
                                  <thead>
                                    <tr>
                                      <td className="text-white">Job Title</td>
                                      <td className="text-white">Filled</td>
                                      <td className="text-white">Date Posted</td>
                                      <td className="text-white">Listing Expires</td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="text-secondary">Receptionist</td>
                                      <td className="text-secondary">--</td>
                                      <td className="text-secondary">June 9, 2024</td>
                                      <td className="text-secondary">August 20, 2024</td>
                                    </tr>
                                    <tr>
                                      <td className="text-secondary">Ui/Ux Designer</td>
                                      <td className="text-secondary">--</td>
                                      <td className="text-secondary">June 9, 2024</td>
                                      <td className="text-secondary">August 20, 2024</td>
                                    </tr>
                                    <tr>
                                      <td className="text-secondary">Web Developer</td>
                                      <td className="text-secondary">--</td>
                                      <td className="text-secondary">June 9, 2024</td>
                                      <td className="text-secondary">August 20, 2024</td>
                                    </tr>
                                  </tbody>
                                </Table>
                                <button className="btn btn-secondary btn-sm text-white">see all</button>
                            </div><br />
                            <div className="bg-white rounded px-2 pt-2 pb-3 shadow-sm">
                                <h6 className='mt-3 px-2 mb-3' style={{fontSize: '17px'}}>My Employees</h6>
                                <div class="row g-3 px-2 align-items-center justify-content-center">
                                  <RatingComponent image={amazondp} name={'Amazon'} 
                                      overallRating={3.5} competenceRating={3} productivityRating={3} integrityRating={4} 
                                      reviewTitle={'Very smart and reliable'} 
                                      reviewBody={'this guy is the most selfless guy I know. Looking for a good guy? employ him.'}
                                  />
                                    <RatingComponent image={Levisdp} name={"Levi's"} 
                                      overallRating={4} competenceRating={2.5} productivityRating={2.5} integrityRating={4} 
                                      reviewTitle={'Very smart and reliable'} 
                                      reviewBody={'this guy is the most selfless guy I know. Looking for a good guy? employ him.'}
                                  />
                                </div>
                                <button className="btn btn-secondary btn-sm text-white mt-3 ms-2">see all</button>
                            </div>
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