
import { Row, Col, Image } from 'react-bootstrap';
import RatingReviews from '../../components/RatingReviews';
import FavoriteButton from '../../components/FavoriteButton';
import SpecialIcon from '../../components/SpecialIcon';

import CurrencyIcon from '../../assets/image/common/currency.svg';

const ItemProduct = ({item}) => {
  return (
    <Col sm="3" style={{ border: '1px solid #D8D8D8', padding: '20px 20px', margin: '10px 10px' }} >
      <SpecialIcon
        isNew={item.isNew}
        rating={item.rating}
        numOfReviews={item.numOfReviews}
      />
      <Col> {item.attributes.stock == 0 ? 'Sold Out' : item.attributes.stock < 5 ? 'Stock < 5' : 'In Stock'} </Col>
      <Image src={item.attributes.images[0]} fluid />
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
    </Col>
  )
}

export default function ContentListProduct(props) {
  const data = [
    {
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
    },
    {
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
    },
    {
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
    }
  ];
  return (
    <div>
      <Row>
        { data.map((item, index) => ( <ItemProduct key={`ItemProduct-${index}`} item={item} /> ))}
      </Row>
    </div>
  )
}
