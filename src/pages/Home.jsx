import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import curve from '../img/curve3.png';
import companyChart  from '../img/for-company-chart.png';
import whyrefscorechart from "../img/why-refscore.png";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";


export const Home = () => {
    return (
        <div>
          <Navbar />

          <div className="container-fluid hero">
            <div className="container pt-5">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-5 mt-5 pt-5">
                  <h1 className="fw-bold mt-5 display-4 text-white hero-h1">The Workforce you Can Bank On</h1>
                  <p className="text-white mt-4" style={{fontSize: '14px'}}>MyRefscore.com is the <strong>first and only</strong> platform where you can get an <strong>unbiased reference scores of a potential employee</strong>, so you can make informed decisions on whether they are the right person for your job.</p>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="search here..."></input>
                    <span className="input-group-text bg-warning px-4 py-3" id="basic-addon1"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                  </div>
                </div>
                <div className="col-lg-5 mt-1">
                  <div>
                    <img src={curve} className="curve" alt="hero curve" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* // hero section ends */}

          <div className="container-fluid function-div pb-5">
            <div className="container pt-1">
              <div style={{width: '80%'}} className="m-auto py-5">
                <h2 className="fw-bold text-center text-dark">Planning To Hire A New Employee? Good, We Know How To Find <span className="color-text">Right One.</span></h2>
                <small className="text-center fw-semibold">My Ref Score allows you to view your employee's past work history and reviews by the previous employers before you hire them.</small>
              </div>
              <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-4">
                  <div>
                    <span>
                      <h2 className="fw-bold color-one">How it</h2>
                      <h1 className="color-one fw-bold" style={{marginTop: '-23px', marginBottom: '-10px'}}>Works</h1>
                      <small className="color-one mb-5">For Company</small>
                    </span><br />
                  <p className="mt-3 color-one" style={{fontSize: '14px'}}>We understand how hard it could be to gather reliable work history and references from potential employees, and to ensure you don't get the wrong person on your team, we made this platform to alleviate all your hiring stress by givng you VERIFIED ratings, comments and job history remarks about your potential employee from their previous employer.</p>
                  <small className="color-one">The two easy steps are: </small>
                  </div>
                </div>
                <div className="col-lg-4">
                  <img src={companyChart} alt="chart" className="company-chart" />
                </div>
                <div className="col-lg-4">
                  {/* <h2 className="fw-bold color-one">How it Works</h2>
                  <small className="color-one">For Company</small> */}
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="container-fluid pb-5 pt-5">
            <div className="container pt-4 pb-4 ">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-4">
                    <span>
                      <small className="color-one">For Professionals / Job Seekers</small>
                      <h2 className="fw-bold color-one" style={{marginTop: '-5px'}}>For Professionals and Job Seekers</h2>
                    </span>
                    <p className="mt-3 color-one" style={{fontSize: '14px'}}>With MyRefScore.com you can create your own professional profile easily. Create your own complete professional profile, browse new jobs and increase your chances of finding a new exciting career.</p>
                    <h5 className="fw-bold color-one">Get Started Today!</h5>
                  </div>
                  <div className="col-lg-8"></div>
                </div>
              </div>
              <div className="row align-items-center justify-content-center mt-5 pt-4">
                <div className="col-lg-6"></div>
                <div className="col-lg-5 text-end">
                  <h2 className="fw-bold color-one">Find Your Next Job Online</h2>
                  <small className="color-one fw-semibold">MyRefscore.com is the most trusted professional network on the web and it's free for job-sekers.</small>
                  <p className="mt-1 color-one fw-semibold" style={{fontSize: '14px'}}>We have thousands of jobs in key industries listed on MyRefscore. Find your next opportunity today!</p>
                  <h5 className="fw-bold color-one">Upload your resume today and get recommendations from experts.</h5>
                </div>
              </div>
            </div>
          </div>
          {/* function div ends */}

          <div className="container-fluid function-div pt-5 pb-5">
            <div className="container mt-2">
              <h2 className="fw-bold text-center">Recently Posted Jobs</h2>

              <Accordion defaultActiveKey="" className="custom-accordion">
                <AccordionItem eventKey="0" className="custom-accordion-item">
                  <AccordionHeader className="custom-accordion-header">See More</AccordionHeader>
                  <AccordionBody className="custom-accordion-body">
                  <div class="row g-1 gap-3 align-items-center justify-content-center mt-1">
                    <div className="bg-white job px-4 py-2">
                      <Link className="color-one m-auto" to="#">Accountant</Link>
                    </div>
                    <div className="bg-white job px-4 py-2">
                      <Link className="color-one m-auto" to="#">Web Designer</Link>
                    </div>
                    <div className="bg-white job px-4 py-2">
                      <Link className="color-one m-auto" to="#">Social Media Manager</Link>
                    </div>
                    <div className="bg-white job px-4 py-2">
                      <Link className="color-one m-auto" to="#">Front End Developer</Link>
                    </div>
                    <div className="bg-white job px-4 py-2">
                      <Link className="color-one m-auto" to="#">Front Desk Office</Link>
                    </div>
                    <div className="bg-white job px-4 py-2">
                      <Link className="color-one m-auto" to="#">Nutritionist</Link>
                    </div>
                    <div className="bg-white job px-4 py-2">
                      <Link className="color-one m-auto" to="#">Nurse</Link>
                    </div>
                    <div className="bg-white job px-4 py-2">
                      <Link className="color-one m-auto" to="#">Backend Developer</Link>
                    </div>
                    <div className="bg-white job px-4 py-2">
                      <Link className="color-one m-auto" to="#">Project Manager</Link>
                    </div>
                    <div className="bg-white job px-4 py-2">
                      <Link className="color-one m-auto" to="#">Ui/Ux Designer</Link>
                    </div>
                  </div>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          {/* recent jobs div ends */}


          <div className="whyrefscore-div">
            <h1 className="fw-bold text-white">Why My Ref Score?</h1>
            <p className="text-white text-center">Aside being the most trusted professional network o the web, here are other reasons why companies choose us</p>
          </div>

          <div className="container-fluid py-5">
            <div className="container pt-2 pb-4">
              <div className="row align-items-center justify-content-center mt-5">
                <div className="col-lg-6">
                  <img src={whyrefscorechart} alt="why-Refscore-chart" className="why-Refscore-chart" />
                </div>
                <div className="col-lg-5 text-end">
                  <h3 className="fw-bold color-one">Get Started Today!</h3>
                  <small className="color-one fw-semibold">MyRefscore.com is the most trusted professional network on the web and it's free for job-sekers.</small>
                  <p className="mt-1 color-one fw-semibold" style={{fontSize: '14px'}}>We have thousands of jobs in key industries listed on MyRefscore. Find your next opportunity today!</p>
                  <div className="d-flex gap-4 justify-content-end mt-4">
                    <Button className="fw-semibold">COMPANY</Button>
                    <Button variant='warning' className="fw-semibold text-white">PROFESSIONAL</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />


        </div>

    )
}