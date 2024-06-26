import { Link } from "react-router-dom";
import appStore from '../img/appstore.png';
import playStore from '../img/playstore.png';

export const Footer = () => {
  return (
    <footer className="footer function-div pt-3">
        <div className="container-fluid pt-4">
            <div className="container px-5 bg- mt-2">
                <div className="row gap-5 align-items-center justify-content-center bg-one py-2" style={{borderRadius: '10px'}}>
                    <div className="col-lg-5">
                        <div className="mt-1">
                            <h5 className="text-white">Subscribe To Our Newsletter</h5>
                            <p className="text-white" style={{fontSize: '13px', marginTop: '-6px'}}>Get notified about latest job opportunities, talents, potential employees.</p>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="your email..."></input>
                            <button className="input-group-text btn btn-light px-4 py-2">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center mt-5 mb-4">
                    <div className="col-lg-4">
                        <h4 className="color-one fw-bold">About Us</h4>
                        <p className="color-one" style={{fontSize: '14px'}}>MyRefScore.com gives you an unbiased  reference score of a potential employee, so you can make informed decisions on whether they are the right person for your job.</p>
                    </div>
                    <div className="col-lg-4">
                        <h4 className="color-one fw-bold quick-links">Quick Links</h4>
                        <div className="d-flex gap-5">
                            <div>
                                <ul>
                                    <li><Link to=''>Login</Link></li>
                                    <li><Link to=''>View Refscore</Link></li>
                                    <li><Link to=''>Create Account</Link></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><Link to=''>Find Job</Link></li>
                                    <li><Link to=''>Find Employee</Link></li>
                                    <li><Link to=''>Submit CV</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mobile-download">
                            <h4 className="color-one fw-bold">Get RefScore for Mobile</h4>
                            <div style={{display: 'flex', flexDirection: 'column', marginTop: '-40px', transform: 'translateX(-18px)'}}>
                                <img src={appStore} alt="download on app store" className="store" />
                                <img src={playStore} alt="download on play store" className="store2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <div className="bg-one py-1">
        <div className="container px-5">
            <p className="text-white" style={{transform: 'translateY(10px)'}}>&copy; 2023 My Ref Score. All rights reserved.</p>
        </div>
        </div>
    </footer>
  );
};

