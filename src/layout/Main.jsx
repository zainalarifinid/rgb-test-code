import { Container, Row, Col } from 'react-bootstrap'
import LogoCompany from '../assets/image/logo/logo-dummy.png'

const MainLayout = ({ children }) => {
  return (
    <Container>
      <Container>
        <Row>
          <Col>
            <a href="/" className='text-decoration-none'>
              <img src={LogoCompany} alt='logo' />
            </a>
          </Col>
        </Row>
      </Container>
      <Container className='content-section' >
        {children}
      </Container>
    </Container>
  )
}

export default MainLayout;