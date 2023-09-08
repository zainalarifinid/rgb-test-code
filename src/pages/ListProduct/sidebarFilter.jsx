import { Row, Col, InputGroup } from "react-bootstrap";


export default function SidebarFilter(props) {

  return (
    <div style={{ border: '1px solid #D8D8D8', padding: '20px 20px' }} >
      <Row>
        <Col sm="10" >
          Rating 4 ke atas
        </Col>
        <Col sm="2" className="text-left" >
          <input type="checkbox" />
        </Col>
      </Row>
      <Row style={{ marginTop: '20px' }} >
        <Col sm="10" >
          Stock tersedia
        </Col>
        <Col sm="2" className="text-left" >
          <input type="checkbox" />
        </Col>
      </Row>
    </div>
  );
}
