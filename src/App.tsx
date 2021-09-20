import { MemoryRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';

import Layout from './components/screen/Layout';

import GlobalStyle from './styles/GlobalStyle';
import { defaultTheme } from './styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    </ThemeProvider>
  );
}
