import { FiArrowLeft, FiSettings, FiSun } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

function Footer() {
  const { pathname: path } = useLocation();

  return (
    <Container>
      {path !== '/settings' ? (
        <Link to="/settings">
          <FiSettings size="1.5rem" />
        </Link>
      ) : (
        <Link to="/">
          <FiArrowLeft size="1.5rem" />
        </Link>
      )}
      <button
        type="button"
        onClick={() => window.Main.openExternal('https://google.com.br')}
      >
        meutempo.app
      </button>
      <Link to="/onboarding">
        <FiSun size="1.5rem" />
      </Link>
    </Container>
  );
}

export default Footer;
