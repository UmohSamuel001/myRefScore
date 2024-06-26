import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserDashboard } from "./pages/UserDashboard";
import { CompanyDashboard } from "./pages/CompanyDashboard";
import { CompanyJobListings } from "./pages/CompanyJobListings";
import { PostJob } from "./pages/PostJob";
import { Job } from "./pages/Job";
import { JobMarket } from "./pages/JobMarket";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/company-dashboard" element={<CompanyDashboard />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/my-job-listings" element={<CompanyJobListings />} />
          <Route path="/job" element={<Job />} />
          <Route path="/job-market" element={<JobMarket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;