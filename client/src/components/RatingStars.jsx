import ReactStars from 'react-stars';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt as halfStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

export const RatingStars = ({ value, onChange }) => {
    const [rating, setRating] = useState(value || 0);

    const ratingChanged = (newRating) => {
      setRating(newRating);
      if (onChange) {
        onChange(newRating);
      }
    };

    return (
        <div>
            <ReactStars
              count={5}
              value={rating}
              onChange={ratingChanged}
              size={16}
              isHalf={true}
              emptyIcon={<FontAwesomeIcon icon={emptyStar} />}
              halfIcon={<FontAwesomeIcon icon={halfStar} />}
              fullIcon={<FontAwesomeIcon icon={fullStar} />}
              activeColor="#ffd700"
            />
        </div>
    )
}