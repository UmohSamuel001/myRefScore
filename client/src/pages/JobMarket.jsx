import { Navbar } from "../components/Navbar";
import { OffCanvas } from "../components/Offcanvas";
import Job from '../img/job-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { IonIcon } from '@ionic/react';
import { locationOutline } from 'ionicons/icons';
import { PopularJobs } from '../components/PopularJobs';
import job1 from '../img/pic1.png';
import job2 from '../img/pic3.png';
import job3 from '../img/pic10.jpg';
import job4 from '../img/img30.jpg';
import { SearchResult } from "../components/SearchResult";
import { useState } from "react";


export const JobMarket = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);


    return (
        <div className="bg-white">
            <Navbar toggleSidebar={handleShow} logoColor="color-one" />
            <OffCanvas show={showOffcanvas} handleClose={handleClose} />

            <div className="d-flex align-items-center justify-content-center bg-two py-5">
                <div className="py-5 d-flex align-items-center justify-content-center">
                    <img src={Job} alt="" className="job-img" />
                    <h1 className="color-one fw-bold market">Market</h1>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <div className="bg-white search-div py-2">
                    <div className="d-flex align-items-center justify-content-center flex">
                        <div className="input-group">
                            <div className="input-group-text btn px-4 py-2"><FontAwesomeIcon icon={faMagnifyingGlass} className="mag" /></div>
                            <input type="text" className="form-control" placeholder="Job title or keyword..."></input>
                        </div>
                        <div className="input-group input-after">
                            <div className="input-group-text btn px-4 py-2"><IonIcon icon={locationOutline} /></div>
                            <input type="text" className="form-control" placeholder="Location..."></input>
                        </div>
                        <button className="btn btn-primary search-btn">Search</button>
                    </div>
                </div>
            </div>
            <div className="container px-4 align-items-center justify-content-center">
                <h6 className='px-4 mt-4 mb-3' style={{fontSize: '17px'}}>Popular Jobs</h6>
                <div className="progress-div px-3">
                <div class="row g-4 align-items-center justify-content-center">
                  <PopularJobs image={job1} name={'Microsoft'} />

                  <PopularJobs image={job2} name={"Sheraton"} />

                  <PopularJobs image={job3} name={'Versace'} />

                  <PopularJobs image={job4} name={'FedEx'} />
                </div>
                </div>
                <div>
                <div className="mt-5 px-3">
                    <h6 className='mt-4 mb-3 px-2' style={{fontSize: '17px'}}>Search Results</h6>
                    <SearchResult image={job3} />
                    <SearchResult image={job3} />
                    <SearchResult image={job3} />
                    <SearchResult image={job3} />
                    <SearchResult image={job3} />
                </div>
            </div>
            </div>
            
           
        </div>
    )
}