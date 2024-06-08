import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg py-0 " id="mynav">
      <div className="container bg-transparent py-3">
        <h3 className="fw-bold logo m-0 text-white">My Ref Score</h3>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/buy-coupon">Buy Coupon</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/buy-coupon">Buy Coupon</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/buy-coupon">Buy Coupon</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/buy-coupon">Buy Coupon</Link>
            </li>
          </ul>
          <Link to="/login">
            <button className="btn btn-primary fw-bold" type="submit">Login</button>
          </Link>
        </div>
      </div>
    </nav>
    )
}