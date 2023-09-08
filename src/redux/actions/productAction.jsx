import axios from 'axios';

const BASE_URL_API = import.meta.env.VITE_BASE_URL_API;

export const getListProduct = () => {
  return async (dispatch) => {
    dispatch({ type: 'SET_LOADING' })
    try {
      const data = await axios.get(`${BASE_URL_API}?page[number]=1&page[size]=20`).then((data) => data.data);
      dispatch({ type: 'GET_LIST_PRODUCT', payload: data.data });
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      dispatch({ type: 'ORDER_PRODUCT_BY', key_to_sorted: 'isNew' });
      dispatch({ type: 'SET_LOADING_DONE'});
    }
  }
}

export const getDetailProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const data = await axios.get(`${BASE_URL_API}/${id}`).then((data) => data.data);
      dispatch({ type: 'GET_DETAIL_PRODUCT', payload: data.data });
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      dispatch({ type: 'SET_LOADING_DONE' });
    } 
  }
}

export const orderProductBy = (key_to_sorted) => {
  return async (dispatch) => {
    dispatch({ type: 'SET_LOADING' });
    dispatch({ type: 'ORDER_PRODUCT_BY', key_to_sorted });
    dispatch({ type: 'SET_LOADING_DONE' });
  }
}

export const filterProductBy = (filter) => {
  return async (dispatch) => {
    console.log(filter);
    dispatch({ type: 'SET_LOADING' });
    dispatch({ type: 'FILTER_PRODUCT_BY', filter });
    dispatch({ type: 'SET_LOADING_DONE' });
  }
};
