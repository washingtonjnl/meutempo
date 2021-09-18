import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import { defaultTheme } from './styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}
