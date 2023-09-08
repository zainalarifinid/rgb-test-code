import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import router from './router.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import store from './store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
        <RouterProvider router={router} />
      </App>
    </Provider>
  </React.StrictMode>,
)
