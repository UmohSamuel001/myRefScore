import { Link } from "react-router-dom";
import curve from '../img/newcurve.png';
import heroImg from '../img/hero-woman_prev_ui.png';
import companyChart  from '../img/for-company-chart.png';
import whyrefscorechart from "../img/why-refscore.png";
import recently from "../img/recently.png";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { RecentJobs } from "../components/RecentJobs";
import { IonIcon } from '@ionic/react';
import { searchOutline, locateOutline, pushOutline } from 'ionicons/icons';


export const Home = () => {
    return (
        <div>
          <Navbar />

          <div className="container-fluid hero">
            <div className="container pt-5 px-5">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-5 mt-5 pt-5">
                  <div className="hero-texts">
                    <h1 className="fw-bold mt-5 display-1 text-white hero-h1">The Workforce</h1>
                    <h1 className="fw-bold display-1 text-white hero-h1" style={{marginTop: '-10px'}}>You Can Bank On</h1>
                    <p className="text-white mt-4" style={{fontSize: '15px'}}>MyRefscore.com is the <strong>first and only</strong> platform where you can get an <strong>unbiased reference scores of a potential employee</strong>, so you can make informed decisions on whether they are the right person for your job.</p>
                  </div>
                  <div className="d-flex gap-4 mt-4 hero-buttons">
                    <button className="btn btn-orange text-white fw-semibold px-4 py-2">Get Started</button>
                    <button className="btn btn-orange text-white fw-semibold px-4 py-2">Login</button>
                  </div>
                </div>
                <div className="col-lg-5 mt-1">
                  <div>
                    <img src={curve} className="curve" alt="hero curve" />
                    <img src={heroImg} alt="hero woman" className="hero-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* // hero section ends */}

          <div className="container-fluid function-div pb-5">
            <div className="container pt-3 pb-2 px-5">
              <div className="py-5 about text-center">
                <h2 className="fw-bold text-center text-dark h2">Planning To Hire A New Employee? Good, We Know How To Find The <span className="color-text">Right One.</span></h2>
                <small className="text-center fw-semibold">My Ref Score allows you to view your employee's past work history and reviews by the previous employers before you hire them.</small>
              </div>
              <div className="row align-items-center justify-content-center about-row">
                <div className="col-lg-4">
                  <div>
                    <span>
                      <h2 className="fw-bold color-one mobile-text" style={{marginBottom: '-10px'}}>How it Works</h2>
                      <h2 className="fw-bold color-one large-text">How it</h2>
                      <h1 className="color-one fw-bold large-text" style={{marginTop: '-23px', marginBottom: '-10px'}}>Works</h1>
                      <small className="color-one mb-5">For Company</small>
                    </span><br />
                    <p className="mt-3 text-secondary" style={{fontSize: '14px'}}>We understand how hard it could be to gather reliable work history and references from potential employees, and to ensure you don't get the wrong person on your team, we made this platform to alleviate all your hiring stress by givng you VERIFIED ratings, comments and job history remarks about your potential employee from their previous employer.</p>
                    <small className="text-secondary">The two easy steps are: </small><br /><br />
                    <button className="btn btn-secondary">Sign Me Up!</button>
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
          <div className="container-fluid pb-5 pt-5">
            <div className="container pt-4 pb-4 px-5">
              <div className="row align-items-center justify-content-center pb-5">
                <div className="col-lg-5">
                  <span>
                    <small className="color-one">For Professionals / Job Seekers</small>
                    <h2 className="fw-bold color-one" style={{marginTop: '-5px'}}>For Professionals and Job Seekers</h2>
                  </span>
                  <p className="mt-3 color-one" style={{fontSize: '14px'}}>With MyRefScore.com you can create your own professional profile easily. Create your own complete professional profile, browse new jobs and increase your chances of finding a new exciting career.</p>
                  <h5 className="fw-bold color-one">Get Started Today!</h5>
                </div>
                <div className="col-lg-7"></div>
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

          {/* <div className="container-fluid function-div pt-5 pb-5">
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
          </div> */}
          {/* recent jobs div ends */}

          <div style={{ position: 'relative', width: '100%'}}>
              <img src={recently} alt="recently posted jobs div" className="w-100" />

              <div className="container-fluid pb-5">
                <div className="container pt-4 mt-1 pb-5 px-5">
                  <div class="row align-items-center justify-content-center mt-1">
                    <RecentJobs jobTitle={'INSPIRING INTERNS: Digital Marketing Manager'} 
                        location={'Lagos'} companyName={'INSPIRING INTERNS'}
                        reviewBody={'we are looking for an experienced digital marketing manager with track record of working within SaaS business.'}
                    />
                    <RecentJobs jobTitle={'INSPIRING INTERNS: Digital Marketing Manager'} 
                        location={'Lagos'} companyName={'INSPIRING INTERNS'}
                        reviewBody={'we are looking for an experienced digital marketing manager with track record of working within SaaS business.'}
                    />
                    <RecentJobs jobTitle={'INSPIRING INTERNS: Digital Marketing Manager'} 
                        location={'Lagos'} companyName={'INSPIRING INTERNS'}
                        reviewBody={'we are looking for an experienced digital marketing manager with track record of working within SaaS business.'}
                    />
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid function-div py-2">
            <div className="container py-5 px-5">
              <div className="row align-items-center justify-content-center how-to">
                <div className="col-lg-5">
                  <div className="d-flex gap-3 steps">
                    <IonIcon icon={searchOutline} size="large" />
                    <small><strong>1. Browse Jobs</strong></small>
                  </div>
                  <div className="d-flex gap-3 steps">
                    <IonIcon icon={locateOutline} size="large" />
                    <small><strong>2. Find Your Vacancy</strong></small>
                  </div>
                  <div className="d-flex gap-3 steps">
                    <IonIcon icon={pushOutline} size="large" />
                    <small><strong>3. Submit Resume</strong></small>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="steps-text">
                    <h4 className=''>Just 3 Easy Steps To New Opportunities</h4>
                    <p>40% of employers are looking for employees in the resume base even before the placement of the vacancy. Take the first step right now!</p>
                    <button className="btn btn-primary">Submit Your Resume</button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="whyrefscore-div text-center">
            <h1 className="fw-bold text-white">Why My Ref Score?</h1>
            <p className="text-white text-center why-p">Aside being the most trusted professional network o the web, here are other reasons why companies choose us</p>
          </div>

          <div className="container-fluid py-5">
            <div className="container px-5 pt-2 pb-4">
              <div className="row align-items-center justify-content-center mt-5 about-row">
                <div className="col-lg-6">
                  <div className="whyref-div py-5 rounded shadow-sm">
                    <img src={whyrefscorechart} alt="why Refscore chart" className="why-Refscore-chart ms-2" />
                  </div>
                </div>
                <div className="col-lg-5 text-end">
                  <h2 className="fw-bold color-one">Get Started Today!</h2>
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