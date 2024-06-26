import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { RatingStars } from './RatingStars';


export const RatingComponent = ({ image, name, overallRating, competenceRating, productivityRating, integrityRating, reviewTitle, reviewBody }) => {
    return (
        <div className="col-lg-6">
            <div className='px-2 pt-2 pb-1 bg-two shadow-sm rating rounded'>
            <div className="d-flex gap-3">
                <div className="rating-dp">
                    <img src={image} alt='' />
                </div>
                <div className=''>
                    <h5 className='fw-bold color-one'>{name}</h5>
                    <div className="mt-2">
                        <div className='d-flex align-items-center rates'>
                            <small className='color-one'>Overall performance</small>
                            <RatingStars value={overallRating} />
                        </div>
                        <div className='d-flex align-items-center rates'>
                            <small className='color-one'>Productivity</small>
                            <RatingStars value={productivityRating} />
                        </div>
                        <div className='d-flex align-items-center rates'>
                            <small className='color-one'>Integrity</small>
                            <RatingStars value={integrityRating} />
                        </div>
                        <div className='d-flex align-items-center rates'>
                            <small className='color-one'>Competence</small>
                            <RatingStars value={competenceRating} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-1 px-2 review'>
                <div className='d-flex gap-2 align-items-center'>
                    <FontAwesomeIcon icon={faComment} className='color-one' />
                    <h5 className='fw-semibold color-one'>{reviewTitle}</h5>
                </div>
                <p className='px-2 ms-3 text-secondary'>{reviewBody}</p>
            </div>
        </div>
        </div>
    )
}