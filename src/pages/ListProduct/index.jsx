import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';

import SidebarFilter from './sidebarFilter.jsx';
import ContentListProduct from './contentListProduct';
import DropdownSort from './dropdownSort.jsx';

import {
  getListProduct,
  orderProductBy,
  filterProductBy,
} from '../../redux/actions/productAction.jsx';

export default function ListProduct() {
  const dispatch = useDispatch();
  const { listProduct } = useSelector((state) => state.product);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    dispatch(getListProduct());
  }, []);

  const onHandleSelectSortOption = (value) => {
    dispatch(orderProductBy( value === 'Terbaru' ? 'isNew' : 'numOfReviews' ))
  }

  const onHandleFilterChange = (e) => {
    const currentFilter = filter;
    currentFilter[e.target.value] = e.target.checked;
    setFilter(currentFilter);
    dispatch(filterProductBy(currentFilter));
  }

  return (
    <Row>
      <Col sm="3">
        <SidebarFilter onHandleFilterChange={onHandleFilterChange} />
      </Col>
      <Col sm="9" >
        <Row>
          <Col sm="9" >Product List</Col>
          <Col sm="3" >
            <DropdownSort onHandleSelectSortOption={onHandleSelectSortOption} />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm="12" >
            <ContentListProduct data={listProduct} />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
