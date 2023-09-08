import { Row, Col } from 'react-bootstrap';

import SidebarFilter from './sidebarFilter.jsx';
import ContentListProduct from './contentListProduct';
import DropdownSort from './dropdownSort.jsx';

export default function ListProduct() {
  return (
    <Row>
      <Col sm="3">
        <SidebarFilter />
      </Col>
      <Col sm="9" >
        <Row>
          <Col sm="9" >Product List</Col>
          <Col sm="3" >
            <DropdownSort />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm="12" >
            <ContentListProduct />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
