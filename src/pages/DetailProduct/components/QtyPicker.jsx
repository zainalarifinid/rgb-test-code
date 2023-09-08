import { Row, Col, Button } from 'react-bootstrap';

export default function QtyPicker(props) {
  const value = props.value ?? 1;

  return (
    <>
      <Row>
        <Col>Jumlah</Col>
      </Row>
      <Row>
        <Col>
          <Button variant='secondary' onClick={() => props.onHandleDecrement()} >-</Button>
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }} >{value}</Col>
        <Col>
          <Button variant='secondary' onClick={() => props.onHandleIncrement()} >+</Button>
        </Col>
      </Row>
    </>
  )
}
