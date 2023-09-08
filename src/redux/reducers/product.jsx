
const initialState = {
  listProduct: [],
  tempListProduct: [],
  loading: false,
  detailProduct: {},
};

const productReducer = (state = initialState, action) => { 
  switch(action.type) {
    case 'GET_LIST_PRODUCT':
      return {
        ...state,
        listProduct: action.payload,
        tempListProduct: action.payload,
      };
    case 'GET_DETAIL_PRODUCT':
      return {
        ...state,
        detailProduct: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SET_LOADING_DONE':
      return {
        ...state,
        loading: false,
      };
    case 'ORDER_PRODUCT_BY':
      return {
        ...state,
        listProduct: state.listProduct.sort((a, b) => b.attributes[action.key_to_sorted] - a.attributes[action.key_to_sorted]),
      }
    case 'FILTER_PRODUCT_BY':
      if(Object.keys(action.filter).length === 0) {
        return {
          ...state,
          listProduct: state.tempListProduct,
        }
      }
      if(Object.keys(action.filter).every((key) => action.filter[key] === false)) {
        return {
          ...state,
          listProduct: state.tempListProduct,
        }
      }

      // eslint-disable-next-line no-case-declarations
      let currentListProduct = state.tempListProduct;

      if(action.filter.rating_4_up) {
        currentListProduct = currentListProduct.filter((product) => parseFloat(product.attributes.rating) >= 4.0);
      }

      if(action.filter.stock_available) {
        currentListProduct = currentListProduct.filter((product) => product.attributes.stock > 0);
      }

      return {
        ...state,
        listProduct: currentListProduct,
      }
    default:
      return state;
  }
}

export default productReducer;
