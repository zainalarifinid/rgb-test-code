import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  Row,
  Col,
  Nav,
  Carousel,
  Image,
  Button,
} from 'react-bootstrap';

import CurrencyIcon from '../../assets/image/common/currency.svg';
import BatikBackground from '../../assets/image/common/batik-background.svg';

import SpecialIcon from '../../components/SpecialIcon.jsx';
import RatingReviews from '../../components/RatingReviews.jsx';
import GenerateBreadcrumb from './components/GenerateBreadcrumb.jsx'; 
import QtyPicker from './components/QtyPicker.jsx';
import FavoriteButton from '../../components/FavoriteButton.jsx';

import './detail-product.css'
import { getDetailProduct } from '../../redux/actions/productAction';

export default function DetailProduct() {
  const idProduct = window.location.pathname.split('/')[2];
  const dispatch = useDispatch();
  const { detailProduct } = useSelector((state) => state.product);

  const [qty, setQty] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);


  const structureBreadcrumb = detailProduct ? [
    { name: 'List Product', href: '/' },
    { name: 'Samsung Galaxy S9' }
  ] : [
    { name: 'List Product', href: '/' }
  ];

  useEffect(() => {
    dispatch(getDetailProduct(idProduct));
  }, []);

  if(!detailProduct) return <></>;

  return (
    <Container className='container-detail-product'>
      <Row>
        <Col>
          <GenerateBreadcrumb structureBreadcrumb={structureBreadcrumb} />
        </Col>
      </Row>
      <Row>
        <Col sm="6" >
          <Carousel>
          {detailProduct?.attributes?.images.map((item, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Carousel.Item key={`carousel-item-${index}`} style={{ position: 'inherit' }} >
                <SpecialIcon
                  isNew={detailProduct?.attributes?.isNew}
                  rating={detailProduct?.attributes?.rating}
                  numOfReviews={detailProduct?.attributes?.numOfReviews}
                />
                <Image key={`image-${index}`} src={item} alt='Product Image' fluid />
              </Carousel.Item>
            )
          })}
          </Carousel>
        </Col>
        <Col sm="6" >
          <Row>
            <Col>
              <h1>{detailProduct?.attributes?.name}</h1>
            </Col>
          </Row>
          <Row>
            <Col sm="6" >
              <RatingReviews
                rating={detailProduct?.attributes?.rating}
                numOfReviews={detailProduct?.attributes?.numOfReviews}
              />
            </Col>
          </Row>
          <Row>
            <Col sm="6" style={{ color: '#74b71b' }} >
              <Image src={CurrencyIcon} /> {Intl.NumberFormat('id-ID').format(detailProduct?.attributes?.points)} poins  
            </Col>
            <Col sm="6" >
              { detailProduct?.attributes?.stock > 0 ? 'In Stock' : 'Out of Stock' }
            </Col>
          </Row>
          <Row>
            <Col>
              <div dangerouslySetInnerHTML={{ __html: detailProduct?.attributes?.info }} />
            </Col>
          </Row>
          <Row style={{ marginBottom: '20px' }} >
            <Col sm="3" >
              <QtyPicker
                value={qty}
                onHandleIncrement={() => setQty(qty + 1)}
                onHandleDecrement={() => setQty(qty - 1)}
              />
            </Col>
          </Row>
          <Row>
            <Col sm="4" className='text-center' >
              <FavoriteButton
                isFavorite={isFavorite}
                handleFavorite={() => setIsFavorite(!isFavorite)}
              />
            </Col>
            <Col sm="4" >
              <Button size='lg' style={{ background: '#016A4E', width: '100%', borderRadius: '30px' }} >Redeem</Button>
            </Col>
            <Col sm="4" >
              <Button variant="outline-primary" size='lg' style={{ color: '#73B81C', border: '1px solid #73B81C', width: '100%', borderRadius: '30px'  }} >Add to cart</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ background: `url(${BatikBackground})` }} >
        <Col sm="12" >
          <Nav variant='underline' defaultActiveKey="description" className="justify-content-left" style={{ marginTop: '20px' }} >
            <Nav.Item>
              <Nav.Link eventKey="description">Description</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col>
          <div className='custom-layout' dangerouslySetInnerHTML={{ __html: detailProduct?.attributes?.description }} />
        </Col>
      </Row>
    </Container>
  )
}
