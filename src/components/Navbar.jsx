import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export const Navbar = ({ toggleSidebar, logoColor = 'text-white' }) => {
    return (
      <nav className="navbar navbar-expand-lg py-0 " id="mynav">
      <div className="container bg-transparent py-3 px-5">
        <h5 className={`fw-bold logo m-0 ${logoColor}`}>My Ref Score</h5>
        <button className="navbar-toggler" onClick={toggleSidebar} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/post-job">Post Job</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my-job-listings">Job Listings</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/job">Jobs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/company-dashboard">Company</Link>
            </li>
          </ul>
          <div className="d-flex gap-3 align-items-center justify-content-center">
            <Link to='/job-market'>
              <FontAwesomeIcon icon={faMagnifyingGlass} size="large" className="color-one" />
            </Link>
            <Link to="/user-dashboard">
              <button className="btn btn-blue fw-semibold text-white px-3" type="submit">Check Ref Score</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
    )
}