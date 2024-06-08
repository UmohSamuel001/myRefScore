import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer function-div pt-3">
        <div className="container">
            <div className="container mt-4">
                <div className="row gap-5 align-items-center justify-content-center bg-one py-2" style={{borderRadius: '10px'}}>
                    <div className="col-lg-5">
                        <h4 className="text-white">Subscribe To Our Newsletter</h4>
                        <p className="text-white" style={{fontSize: '13px', marginTop: '-6px'}}>Get notified about latest job opportunities, talents, potential employees.</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="your email..."></input>
                            <span className="input-group-text bg-warning px-4 py-2" id="basic-addon1">Subscribe</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row gap-5 align-items-center justify-content-center mt-5 mb-4">
                <div className="col-lg-4">
                    <h4 className="color-one fw-bold">About Us</h4>
                    <p className="color-one" style={{fontSize: '14px'}}>MyRefScore.com gives you an unbiased  reference score of a potential employee, so you can make informed decisions on whether they are the right person for your job.</p>
                </div>
                <div className="col-lg-7">
                    <h4 className="color-one fw-bold">Quick Links</h4>
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
            </div>
        
      </div>
      <div className="bg-one py-1">
        <div className="container">
            <p className="text-white" style={{transform: 'translateY(10px)'}}>&copy; 2023 My Website. All rights reserved.</p>
        </div>
        </div>
    </footer>
  );
};

