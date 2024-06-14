import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { CompanyDashboard } from "./pages/CompanyDashboard";
import { CompanyJobListings } from "./pages/CompanyJobListings";
import { PostJob } from "./pages/PostJob";
import { Job } from "./pages/Job";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/company-dashboard" element={<CompanyDashboard />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/my-job-listings" element={<CompanyJobListings />} />
          <Route path="/job" element={<Job />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;