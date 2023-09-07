import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from './pages/error-page.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>List Product</div>,
  },
  {
    path: '/product/:id',
    element: <div>Detail Product</div>,
  },
  {
    path: '*',
    element: <ErrorPage />,
  }
]);

export default router;