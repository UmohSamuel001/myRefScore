import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ProfilePic from '../img/pic3.png';
import { RatingComponent } from '../components/RatingComponent';
import amazondp from '../img/amazz.jpg';
import Levisdp from '../img/Levis-Logo-Design-1024x683.webp';
import Fedexdp from '../img/fedex.png';
import Versacedp from '../img/starbsloh.jpg';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Sidebar } from '../components/Sidebar';
import { RatingStars } from '../components/RatingStars';


export const Login = () => {
    return (
        <div className="bg-light">
    <Sidebar />

    <div id="main">
  <div class="row h-100">
    <div class="col-lg-9">
      <div className="bg-white h-100 pt-4 ">
        <div className='d-flex justify-content-end'>
          <div className="input-group me-4" style={{width: '40%'}}>
            <input type="text" className="form-control" placeholder="search here..."></input>
            <span className="input-group-text bg-warning px-3 py-2" id="basic-addon1"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
          </div>
        </div>
        <div className="container align-items-center justify-content-center">
          <h6 className='mt-3 px-2' style={{fontSize: '17px'}}>My Refences & Ratings</h6>
          <div class="row g-3 px-2 align-items-center justify-content-center mt-1">
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
            <RatingComponent image={Versacedp} name={'Versace'} 
              overallRating={3} competenceRating={4} productivityRating={2} integrityRating={4}
              reviewTitle={'Very smart and reliable'} 
              reviewBody={'this guy is the most selfless guy I know. Looking for a good guy? employ him.'}
            />

            <RatingComponent image={Fedexdp} name={'FedEx'} 
              overallRating={4} competenceRating={3} productivityRating={3} integrityRating={5} 
              reviewTitle={'Very smart and reliable'} 
              reviewBody={'this guy is the most selfless guy I know. Looking for a good guy? employ him.'} 
            />
          </div>
          
        </div>
        {/* <div className="container bg-danger">
          <h6 className='mt-3 px-2'>My Refences & Ratings</h6>
          <div class="row gap-3 align-items-center justify-content-center mt-3">

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

            <RatingComponent image={Versacedp} name={'Versace'} 
              overallRating={3} competenceRating={4} productivityRating={2} integrityRating={4}
              reviewTitle={'Very smart and reliable'} 
              reviewBody={'this guy is the most selfless guy I know. Looking for a good guy? employ him.'}
            />

            <RatingComponent image={Fedexdp} name={'FedEx'} 
              overallRating={4} competenceRating={3} productivityRating={3} integrityRating={5} 
              reviewTitle={'Very smart and reliable'} 
              reviewBody={'this guy is the most selfless guy I know. Looking for a good guy? employ him.'} 
            />

          </div>
        </div> */}
      </div>
    </div>
    <div class="col-lg-3 px-2">
      <div className="container-fluid bg-white h-100 pt-4" style={{padding: '0 0 0 0'}}>
        <div className="container">
          <div className="d-flex gap-2 px-2">
              <div className="dp">
                  <img src={ProfilePic} className='' alt="profile" />
              </div>
              <span>
                  <h6 className='color-one fw-bold' style={{fontSize: '21px'}}>Babajide Ayodele</h6>
                  <span>
                      <p style={{fontSize: '12px',  marginTop: '-8px'}} className='text-secondary'>Accountant</p>
                      <p style={{fontSize: '12px', marginTop: '-20px'}} className='text-secondary'>Lagos, Nigeria</p>
                  </span>
              </span>
          </div>
          <div className='px-3' style={{lineHeight: '18px'}}>
            <RatingStars value={4}  />
            <small><strong style={{color: 'rgb(0, 155, 155)'}}>Average Reference Score</strong></small>
          </div><br />
          <div className='px-3 bg-'>
            <p style={{fontSize: '13px',  marginTop: '-8px'}} className='text-secondary'>I'm an accounting professional with ICAN and a Bachelor's degree in accounting and fincance.</p>
            <p style={{fontSize: '13px', marginTop: '-20px'}} className='text-secondary'>I have honed my skill by working for diverse companies as both full-time and part-time Accountant.</p>
          </div>
          <div className='text-center mt-5'>
            <ButtonGroup aria-label="First group">
              <Button style={{ backgroundColor: 'cornflowerblue', border: 'none' }}>profile</Button>
              <Button style={{ backgroundColor: 'crimson', border: 'none' }}>find jobs</Button>
              <Button style={{ backgroundColor: 'coral', border: 'none' }}>verify</Button>
            </ButtonGroup>
          </div>
          <br />
          <div className='bg-one text-center p-3 rounded bg-one-ci mt-4'>
            <h6 className='contact rounded mb-3'>Contact Information</h6>
            <p className='text-white text-start'>Phone: <strong><small>0917428732</small></strong></p>
            <p className='text-white text-start'>Email: <strong><small>babajide1@gmail.com</small></strong></p>
            <p className='text-white text-start'>Social: </p>
          </div>

        </div>
        
      </div>
    </div>
  </div>
</div>
    
        </div>
    )
}
