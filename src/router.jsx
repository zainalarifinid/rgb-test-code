import { createBrowserRouter } from 'react-router-dom';

import ListProduct from './pages/ListProduct/index.jsx';
import DetailProduct from './pages/DetailProduct/index.jsx';
import ErrorPage from './pages/error-page.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ListProduct />,
  },
  {
    path: '/product/:id',
    element: <DetailProduct />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  }
]);

export default router;