import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { IonIcon } from '@ionic/react';
import { bookmarkOutline } from 'ionicons/icons';



export const PopularJobs = ({ image, name }) => {
    return (
        <div className="col-lg-3">
            <div className='px-2 pt-2 pb-1 border p-job rounded'>
            <div className="py-1">
                <div className='d-flex align-items-center justify-content-between'>
                    <div className="job-dp">
                        <img src={image} alt='' />
                    </div>
                    <button className="btn btn-"><IonIcon icon={bookmarkOutline} /></button>
                </div>
                <h5 className='fw-semibold color-one mt-2'>{name}</h5>
                <p className='text-secondary salary'>$100 - $300</p>
                <div className="d-flex gap-2" style={{marginTop: '-12px', marginBottom: '10px'}}>
                    <span class="badge badge1">fulltime</span>
                    <span class="badge badge2">remote</span>
                </div>
                <small className='text-secondary'>20 applied</small>
            </div>
            
        </div>
        </div>
    )
}