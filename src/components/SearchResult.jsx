import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { IonIcon } from '@ionic/react';
import { locationOutline } from 'ionicons/icons';


export const SearchResult = ({ image, name }) => {
    return (
        <div className="col-lg-12">
            <div className='px-2 pt-2 pb-1 search-result'>
            <div className="d-flex align-tems-center justify-content-between gap-3">
                <div className='d-flex align-tems-center gap-2'>
                <div className="search-dp">
                    <img src={image} alt='' />
                </div>
                <div className=''>
                    <h5 className='fw-semibold color-one'>Product Manager</h5>
                    <div className='d-flex align-items-center gap-2' style={{transform: 'translateY(-10px)'}}>
                        <IonIcon icon={locationOutline} style={{transform: 'translateY(-5px)'}} />
                        <p>Lagos</p>
                    </div>
                </div>
                </div>
                <div>
                    <p className='color-one' style={{marginBottom: '-6px'}}>Full time</p>
                    <small>posted 2 days ago</small>
                </div>
            </div>
            <div className='' style={{marginTop: '-10px'}}>
                <p className='text-secondary'>We are looking for a hardworking employee to fill up this gap </p>
                <p className='color-one' style={{marginTop: '-10px'}}>view details</p>
            </div>
        </div>
        </div>
    )
}