import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { RatingStars } from './RatingStars';
import { Badge } from 'react-bootstrap';
import { IonIcon } from '@ionic/react';
import { locationOutline, calendarClearOutline } from 'ionicons/icons';



export const RecentJobs = ({ jobTitle, location, companyName, reviewBody }) => {
    return (
        <div className="col-lg-4">
            <div className='px-2 pt-2 pb-1 rating rounded'>
                <div className=''>
                    <h5 className='' style={{fontSize: '18px', fontWeight: '700'}}>{jobTitle}</h5>
                    <div className="mt-3 d-flex gap-2 align-items-center">
                        <Badge>Full Time</Badge>
                        <div className='d-flex gap-1 align-items-center rates'>
                            <IonIcon icon={locationOutline} />
                            <small className='color-one'>{location}</small>
                        </div>
                        <div className='d-flex gap-1 align-items-center rates'>
                            <IonIcon icon={calendarClearOutline} />
                            <small className='color-one'>posted 6 days ago</small>
                        </div>
                    </div>
                </div>
            <div className='mt-3 px-2 recent-jobs'>
                <p className='text-secondary'>N100 - 200K</p>
                <p className='text-secondary'>{companyName}</p>
                <p className='text-secondary'>{reviewBody}</p>
            </div>
        </div>
        </div>
    )
}