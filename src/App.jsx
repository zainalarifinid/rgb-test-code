
import MainLayout from './layout/Main';
import FooterLayout from './layout/components/footer/Footer';

import './app.css';

// eslint-disable-next-line react/prop-types
function App({ children }) {
  return (
    <>
      <MainLayout >
        {children}
      </MainLayout>
      <FooterLayout />
    </>
  )
}

export default App
