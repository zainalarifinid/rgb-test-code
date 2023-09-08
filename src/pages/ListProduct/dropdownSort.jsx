import { useState } from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap';

export default function dropdownSort(props) {

  const [sort, setSort] = useState('Terbaru');

  const onHandleSelectSortValue = (value) => {
    setSort(value);
    props.onHandleSelectSortOption(value);
  }

  return (
    <Row>
      <Col sm="4" className='flex align-content-center justify-content-center' >
        Urutkan 
      </Col>
      <Col sm="8" >
        <Dropdown style={{ width: '100%' }} size="lg" >
          <Dropdown.Toggle variant="secondary" style={{ borderRadius: '40px', background: '#ffffff', color: '#000000', width: '100%' }} id="dropdown-basic">
            { sort }
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => onHandleSelectSortValue('Terbaru')} >Terbaru</Dropdown.Item>
            <Dropdown.Item onClick={() => onHandleSelectSortValue('Ulasan')} >Ulasan</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  )
}
