import { useLocation } from 'react-router-dom';
import Routes from '../../../Routes';

import Header from '../Header';
import Footer from '../Footer';

import { Container } from './styles';

function Layout() {
  const { pathname: path } = useLocation();

  return (
    <Container>
      <Header />
      <Routes />
      {path !== '/onboarding' && <Footer />}
    </Container>
  );
}

export default Layout;
