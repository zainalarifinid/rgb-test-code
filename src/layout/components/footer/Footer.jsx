import { Container, Row, Col } from 'react-bootstrap';

import IconFacebook from '../../../assets/image/media-social/fb.svg';
import IconInstagram from '../../../assets/image/media-social/ig.svg';
import IconTwitter from '../../../assets/image/media-social/twt.svg';

export default function Footer() {
  return (
    <Container className='footer-section' >
      <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <Col md="6" >
          <Row>
            <Col><img src={IconFacebook} className='media-social-icon' /></Col>
            <Col><img src={IconInstagram} className='media-social-icon' /></Col>
            <Col><img src={IconTwitter} className='media-social-icon' /></Col>
          </Row>
        </Col>
        <Col md="6" style={{ color: 'white', alignContent: 'center' }} >
          Terms & Condition | Copyright &copy; 2018. All rights reserved. PT Radya Gita Bahagi
        </Col>
      </Row>
    </Container>
  );
}
