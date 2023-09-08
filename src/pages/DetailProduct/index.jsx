import { useState } from 'react';

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

import RatingReviews from '../../components/RatingReviews.jsx';
import GenerateBreadcrumb from './components/GenerateBreadcrumb.jsx'; 
import QtyPicker from './components/QtyPicker.jsx';
import FavoriteButton from '../../components/FavoriteButton.jsx';

import './detail-product.css'

export default function DetailProduct() {

  const [qty, setQty] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const data = {
    "id": "19",
    "type": "gift",
    "attributes": {
        "id": 19,
        "name": "Apple iPhone X 64GB",
        "info": "<p>The anniversary iPhone is here. The iPhone X. Or the iPhone 10. The name is as confusing as the product itself is game-changing. Tim Cook's vision finally overwhelmed Steve Jobs ideological remnants. A new dawn for the iPhones has begun, free of the iconic Home key and the notorious screen bezels.</p>",
        "description": "<p> \nBody: Stainless steel frame, reinforced glass front, and rear, IP67 certified for water and dust resistance. Space Gray, and Silver color options.<br />\nScreen: 5.8\" bezel-less Super AMOLED screen of 1125 x 2436px resolution, 458ppi. HDR video support, wide color gamut. True Tone adjustment via a six-channel ambient light sensor, 3D Touch.<br />\nOS: Apple iOS 11<br />\nChipset: Hexa-core (2 Monsoon + 4 Mistral) 2.39GHz Apple CPU, tri-core Apple GPU, Apple A11 Bionic SoC<br />\nMemory: 3GB of RAM; 64/256GB of internal storage (non-expandable)<br />\nCamera: Dual 12MP camera: wide-angle F/1.8 with OIS + telephoto F/2.4 with OIS, live bokeh effects (including Portrait mode and Portrait Lightning), 2x lossless zoom, quad-LED flash with slow sync, phase detection auto focus, wide color gamut capture<br />\nVideo recording: 2160p@60/30fps, 1080p@30/60/120/240fps video recording<br />\nSelfie: 7MP F/2.2 front-facing camera with BSI sensor and HDR mode, 1080p@30fps video, depth detection for Portrait mode and animoji<br />\nStorage: 64GB or 256GB of built-in storage<br />\nConnectivity: 4G LTE Cat.12 (600Mbps); Wi-Fi a/b/g/n/ac; Bluetooth 5.0; Lightning port; GPS with A-GPS, GLONASS, GALILEO, QZSS; NFC (Apple, NFC tag reading)<br />\nBattery: 2,716mAh battery, wireless charging (Qi compatible)<br />\nMisc: Face ID through dedicated TrueDepth camera, Stereo speakers, Taptic Engine<br />\n</p>",
        "points": 2000,
        "slug": "apple-iphone-x-64gb",
        "stock": 19,
        "images": [
            "https://rgbtest.s3.ap-southeast-1.amazonaws.com/images/gift/full/apple-iphone-x.jpg"
        ],
        "isNew": 0,
        "rating": 4.61,
        "numOfReviews": 25,
        "isWishlist": 0
    }
  };

  const structureBreadcrumb = [
    { name: 'List Product', href: '/' },
    { name: 'Samsung Galaxy S9' }
  ]

  return (
    <Container className='container-detail-product' >
      <Row>
        <Col>
          <GenerateBreadcrumb structureBreadcrumb={structureBreadcrumb} />
        </Col>
      </Row>
      <Row>
        <Col sm="6" >
          <Carousel>
          {data.attributes.images.map((item, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Carousel.Item key={`carousel-item-${index}`} >
                <Image key={`image-${index}`} src={item} alt='Product Image' fluid />
              </Carousel.Item>
            )
          })}
          </Carousel>
        </Col>
        <Col sm="6" >
          <Row>
            <Col>
              <h1>{data.attributes.name}</h1>
            </Col>
          </Row>
          <Row>
            <Col sm="4" >
              <RatingReviews
                rating={data.attributes.rating}
                numOfReviews={data.attributes.numOfReviews}
              />
            </Col>
          </Row>
          <Row>
            <Col sm="6" style={{ color: '#74b71b' }} >
              <Image src={CurrencyIcon} /> {Intl.NumberFormat('id-ID').format(data.attributes.points)} poins  
            </Col>
            <Col sm="6" >
              { data.attributes.stock > 0 ? 'In Stock' : 'Out of Stock' }
            </Col>
          </Row>
          <Row>
            <Col>
              <div dangerouslySetInnerHTML={{ __html: data.attributes.info }} />
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
          <div className='custom-layout' dangerouslySetInnerHTML={{ __html: data.attributes.description }} />
        </Col>
      </Row>
    </Container>
  )
}
