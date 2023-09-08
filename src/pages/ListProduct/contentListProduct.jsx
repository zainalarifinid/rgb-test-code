
import { Row, Col, Image } from 'react-bootstrap';
import RatingReviews from '../../components/RatingReviews';
import FavoriteButton from '../../components/FavoriteButton';
import SpecialIcon from '../../components/SpecialIcon';

import CurrencyIcon from '../../assets/image/common/currency.svg';

const ItemProduct = ({item}) => {
  return (
    <Col sm="3" style={{ border: '1px solid #D8D8D8', padding: '20px 20px', margin: '10px 10px', position: 'relative' }} >
      <a href={`product/${item.id}`} style={{ textDecoration: 'none', color: '#000000' }} >
        <SpecialIcon
          isNew={item.attributes.isNew}
          rating={item.attributes.rating}
          numOfReviews={item.attributes.numOfReviews}
        />
        <Col> {item.attributes.stock == 0 ? 'Sold Out' : item.attributes.stock < 5 ? 'Stock < 5' : 'In Stock'} </Col>
        <Image src={item.attributes.images[0]} fluid style={{ maxHeight: '200px' }} />
        <h5>{item.attributes.name}</h5>
        <Row>
          <Col sm="6" style={{ color: '#74b71b' }} >
            <Image src={CurrencyIcon} /> {Intl.NumberFormat('id-ID').format(item.attributes.points)} poins  
          </Col>
        </Row>
        <Row>
          <Col sm="9" >
            <RatingReviews
              rating={item.attributes.rating}
              numOfReviews={item.attributes.numOfReviews}
              sizeStar={10}
            />
          </Col>
          <Col sm="3" >
            <FavoriteButton
              isWishlist={item.attributes.isWishlist}
              handleFavorite={() => console.log('handle')}
              size={50}
            />
          </Col>
        </Row>
      </a>
    </Col>
  )
}

export default function ContentListProduct(props) {
  const data = props.data ?? [];
  if(data.length === 0) return <></>;
  return (
    <div>
      <Row>
        { data.map((item, index) => ( <ItemProduct key={`ItemProduct-${index}`} item={item} /> ))}
      </Row>
    </div>
  )
}
