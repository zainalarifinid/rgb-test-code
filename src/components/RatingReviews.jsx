
import { Row, Col } from 'react-bootstrap';

import StarsFulFilled from '../assets/image/common/star-light.svg';
import StarsHalfFilled from '../assets/image/common/start-light-half.svg';
import StarsEmpty from '../assets/image/common/start-dark.svg';

const calculatingStars = (rating) => {
  let ratingArray = [];
  let ratingInt = Math.floor(rating);
  let ratingFloat = rating - ratingInt;

  for(let i = 0; i < ratingInt; i++) {
    ratingArray.push(StarsFulFilled);
  }

  if(ratingFloat * 10 >= 8 ) {
    ratingArray.push(StarsFulFilled);
  }else if(ratingFloat * 10 <= 2) {
    ratingArray.push(StarsEmpty);
  }else{
    ratingArray.push(StarsHalfFilled);
  }

  for(let i = ratingArray.length; i < 5; i++) {
    ratingArray.push(StarsEmpty);
  }

  return ratingArray;
}

export default function RatingReviews(props){

  const rating = props?.rating ?? 0;
  const numOfReviews = props?.numOfReviews ?? 0;
  const sizeStar = props?.sizeStar ?? 20;
  const DisplayStars = () => {
    return <div style={{ display: 'flex', flexDirection: 'row'}} >
      {calculatingStars(rating).map((item, index) => (
        // eslint-disable-next-line react/jsx-key
        <div key={`star-box-${index}`} >
          <img src={item} alt='stars' width={sizeStar} />
        </div>
      ))}
    </div>
  }

  return (
    <Row className='text-left' >
      <Col sm="4" >
        <DisplayStars />
      </Col>
      <Col sm="8" >
        {numOfReviews} { numOfReviews > 1 ? 'reviews' : 'review'}
      </Col>
    </Row>
  )
}
